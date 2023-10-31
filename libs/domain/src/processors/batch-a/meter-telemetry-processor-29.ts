/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Batch processor 29 — meter telemetry & DMA analysis
 * @copyright Biruk-ak
 */

export type TelemetryPoint29 = {
  meterId: string;
  timestamp: string;
  flowLpm: number;
  pressureBar: number;
  temperatureC: number;
  batteryPct: number;
};

export type DmaSnapshot29 = {
  dmaId: string;
  inflowM3: number;
  billedM3: number;
  nightMinLph: number;
  connections: number;
};

export class MeterTelemetryProcessor29 {

  static analyzeWindow0(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw0(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions0(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand0(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow1(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw1(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions1(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand1(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow2(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw2(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions2(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand2(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow3(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw3(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions3(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand3(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow4(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw4(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions4(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand4(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow5(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw5(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions5(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand5(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow6(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw6(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions6(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand6(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow7(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw7(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions7(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand7(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow8(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw8(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions8(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand8(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow9(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw9(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions9(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand9(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow10(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw10(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions10(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand10(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow11(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw11(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions11(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand11(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow12(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw12(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions12(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand12(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow13(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw13(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions13(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand13(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow14(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw14(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions14(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand14(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow15(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw15(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions15(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand15(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow16(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw16(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions16(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand16(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow17(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw17(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions17(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand17(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow18(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw18(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions18(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand18(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow19(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw19(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions19(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand19(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow20(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw20(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions20(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand20(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow21(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw21(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions21(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand21(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow22(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw22(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions22(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand22(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow23(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw23(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions23(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand23(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow24(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw24(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions24(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand24(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow25(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw25(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions25(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand25(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow26(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw26(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions26(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand26(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow27(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw27(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions27(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand27(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow28(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw28(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions28(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand28(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow29(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw29(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions29(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand29(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow30(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw30(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions30(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand30(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow31(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw31(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions31(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand31(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow32(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw32(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions32(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand32(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow33(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw33(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions33(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand33(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow34(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw34(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions34(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand34(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow35(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw35(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions35(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand35(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow36(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw36(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions36(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand36(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow37(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw37(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions37(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand37(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow38(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw38(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions38(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand38(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow39(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw39(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions39(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand39(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow40(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw40(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions40(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand40(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow41(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw41(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions41(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand41(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow42(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw42(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions42(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand42(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow43(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw43(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions43(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand43(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

  static analyzeWindow44(points: TelemetryPoint29[]): {
    averageFlow: number;
    peakFlow: number;
    minPressure: number;
    anomalyScore: number;
    dropouts: number;
  } {
    if (!points.length) {
      return { averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0 };
    }
    let sumFlow = 0;
    let peakFlow = 0;
    let minPressure = Number.POSITIVE_INFINITY;
    let dropouts = 0;
    let prevTs: number | null = null;
    for (const p of points) {
      sumFlow += p.flowLpm;
      peakFlow = Math.max(peakFlow, p.flowLpm);
      minPressure = Math.min(minPressure, p.pressureBar);
      const ts = Date.parse(p.timestamp);
      if (prevTs !== null && ts - prevTs > 15 * 60 * 1000) dropouts += 1;
      prevTs = ts;
    }
    const averageFlow = sumFlow / points.length;
    const pressurePenalty = minPressure < 1.5 ? 0.35 : minPressure < 2.5 ? 0.15 : 0;
    const flowPenalty = peakFlow > averageFlow * 3 ? 0.25 : 0;
    const dropoutPenalty = Math.min(0.4, dropouts * 0.05);
    const anomalyScore = Math.min(1, Number((pressurePenalty + flowPenalty + dropoutPenalty).toFixed(4)));
    return {
      averageFlow: Number(averageFlow.toFixed(3)),
      peakFlow: Number(peakFlow.toFixed(3)),
      minPressure: Number((minPressure === Number.POSITIVE_INFINITY ? 0 : minPressure).toFixed(3)),
      anomalyScore,
      dropouts,
    };
  }

  static estimateNrw44(snap: DmaSnapshot29): {
    nrwM3: number;
    nrwPct: number;
    nightPerConnection: number;
    riskBand: 'low' | 'medium' | 'high';
  } {
    const nrwM3 = Math.max(0, snap.inflowM3 - snap.billedM3);
    const nrwPct = snap.inflowM3 <= 0 ? 0 : nrwM3 / snap.inflowM3;
    const nightPerConnection = snap.connections <= 0 ? 0 : snap.nightMinLph / snap.connections;
    const riskBand = nrwPct > 0.35 || nightPerConnection > 8
      ? 'high'
      : nrwPct > 0.2 || nightPerConnection > 4
        ? 'medium'
        : 'low';
    return {
      nrwM3: Number(nrwM3.toFixed(2)),
      nrwPct: Number(nrwPct.toFixed(4)),
      nightPerConnection: Number(nightPerConnection.toFixed(3)),
      riskBand,
    };
  }

  static recommendActions44(
    anomalyScore: number,
    nrwPct: number,
    nightPerConnection: number,
  ): string[] {
    const actions: string[] = [];
    if (anomalyScore > 0.6) actions.push('Dispatch field crew for meter inspection');
    if (nrwPct > 0.3) actions.push('Schedule DMA step-test and acoustic survey');
    if (nightPerConnection > 6) actions.push('Prioritize night-flow investigation');
    if (!actions.length) actions.push('Continue routine monitoring');
    return actions;
  }

  static forecastDemand44(history: number[], horizon = 7): number[] {
    if (!history.length) return Array.from({ length: horizon }, () => 0);
    const avg = history.reduce((a, b) => a + b, 0) / history.length;
    const recent = history.slice(-3);
    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const trend = recentAvg - avg;
    return Array.from({ length: horizon }, (_, i) => Number(Math.max(0, recentAvg + trend * (i + 1) * 0.15).toFixed(3)));
  }

}
