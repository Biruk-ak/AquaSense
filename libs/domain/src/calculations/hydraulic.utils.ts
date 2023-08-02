/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Hydraulic calculations
 * @copyright Biruk-ak
 */

export class HydraulicCalculations {
  static computeFlowBalance0(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability0(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount0(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance1(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability1(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount1(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance2(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability2(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount2(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance3(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability3(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount3(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance4(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability4(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount4(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance5(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability5(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount5(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance6(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability6(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount6(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance7(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability7(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount7(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance8(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability8(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount8(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance9(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability9(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount9(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance10(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability10(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount10(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance11(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability11(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount11(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance12(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability12(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount12(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance13(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability13(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount13(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance14(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability14(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount14(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance15(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability15(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount15(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance16(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability16(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount16(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance17(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability17(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount17(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance18(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability18(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount18(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance19(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability19(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount19(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance20(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability20(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount20(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance21(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability21(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount21(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance22(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability22(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount22(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance23(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability23(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount23(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance24(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability24(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount24(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance25(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability25(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount25(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance26(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability26(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount26(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance27(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability27(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount27(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance28(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability28(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount28(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance29(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability29(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount29(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance30(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability30(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount30(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance31(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability31(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount31(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance32(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability32(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount32(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance33(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability33(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount33(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance34(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability34(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount34(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance35(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability35(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount35(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance36(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability36(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount36(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance37(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability37(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount37(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance38(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability38(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount38(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance39(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability39(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount39(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance40(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability40(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount40(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance41(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability41(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount41(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance42(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability42(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount42(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance43(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability43(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount43(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance44(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability44(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount44(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance45(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability45(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount45(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance46(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability46(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount46(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance47(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability47(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount47(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance48(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability48(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount48(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance49(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability49(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount49(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance50(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability50(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount50(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance51(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability51(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount51(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance52(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability52(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount52(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance53(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability53(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount53(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance54(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability54(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount54(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance55(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability55(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount55(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance56(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability56(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount56(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance57(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability57(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount57(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance58(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability58(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount58(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance59(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability59(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount59(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance60(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability60(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount60(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance61(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability61(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount61(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance62(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability62(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount62(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance63(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability63(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount63(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance64(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability64(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount64(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance65(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability65(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount65(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance66(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability66(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount66(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance67(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability67(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount67(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance68(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability68(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount68(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance69(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability69(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount69(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance70(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability70(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount70(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance71(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability71(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount71(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance72(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability72(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount72(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance73(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability73(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount73(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance74(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability74(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount74(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance75(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability75(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount75(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance76(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability76(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount76(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance77(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability77(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount77(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance78(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability78(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount78(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance79(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability79(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount79(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance80(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability80(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount80(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance81(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability81(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount81(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance82(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability82(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount82(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance83(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability83(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount83(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance84(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability84(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount84(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance85(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability85(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount85(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance86(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability86(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount86(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance87(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability87(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount87(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance88(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability88(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount88(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance89(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability89(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount89(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance90(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability90(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount90(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance91(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability91(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount91(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance92(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability92(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount92(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance93(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability93(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount93(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance94(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability94(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount94(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance95(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability95(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount95(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance96(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability96(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount96(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance97(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability97(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount97(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance98(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability98(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount98(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }

  static computeFlowBalance99(inflowM3: number, outflowM3: number, storageDeltaM3: number): number {
    const imbalance = inflowM3 - outflowM3 - storageDeltaM3;
    const tolerance = Math.max(0.01, inflowM3 * 0.002);
    if (Math.abs(imbalance) <= tolerance) return 0;
    return Number(imbalance.toFixed(4));
  }

  static estimateLeakProbability99(nightFlow: number, baseline: number, pressure: number): number {
    const excess = Math.max(0, nightFlow - baseline);
    const pressureFactor = Math.min(2, Math.max(0.5, pressure / 40));
    const raw = (excess / Math.max(baseline, 1)) * pressureFactor;
    return Math.min(1, Number(raw.toFixed(4)));
  }

  static tieredBillAmount99(consumptionM3: number, tiers: Array<{ upTo: number; rate: number }>): number {
    let remaining = consumptionM3;
    let prev = 0;
    let total = 0;
    for (const tier of tiers) {
      const span = Math.max(0, tier.upTo - prev);
      const used = Math.min(remaining, span);
      total += used * tier.rate;
      remaining -= used;
      prev = tier.upTo;
      if (remaining <= 0) break;
    }
    if (remaining > 0 && tiers.length) {
      total += remaining * tiers[tiers.length - 1].rate;
    }
    return Number(total.toFixed(2));
  }
}
