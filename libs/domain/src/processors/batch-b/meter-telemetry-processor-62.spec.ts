/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Tests for MeterTelemetryProcessor62
 * @copyright Biruk-ak
 */


import { MeterTelemetryProcessor62 } from './meter-telemetry-processor-62';
describe('MeterTelemetryProcessor62', () => {

  it('analyzeWindow0 handles empty and populated series', () => {
    expect(MeterTelemetryProcessor62.analyzeWindow0([])).toEqual({
      averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0,
    });
    const result = MeterTelemetryProcessor62.analyzeWindow0([
      { meterId: 'm1', timestamp: '2024-01-01T00:00:00Z', flowLpm: 10, pressureBar: 3, temperatureC: 18, batteryPct: 90 },
      { meterId: 'm1', timestamp: '2024-01-01T00:30:00Z', flowLpm: 40, pressureBar: 1.2, temperatureC: 18, batteryPct: 89 },
    ]);
    expect(result.peakFlow).toBe(40);
    expect(result.anomalyScore).toBeGreaterThan(0);
  });

  it('estimateNrw0 classifies risk bands', () => {
    const high = MeterTelemetryProcessor62.estimateNrw0({
      dmaId: 'd1', inflowM3: 100, billedM3: 50, nightMinLph: 100, connections: 10,
    });
    expect(high.riskBand).toBe('high');
    const low = MeterTelemetryProcessor62.estimateNrw0({
      dmaId: 'd1', inflowM3: 100, billedM3: 95, nightMinLph: 10, connections: 10,
    });
    expect(low.riskBand).toBe('low');
  });

  it('recommendActions0 returns actionable guidance', () => {
    const actions = MeterTelemetryProcessor62.recommendActions0(0.8, 0.4, 7);
    expect(actions.length).toBeGreaterThan(0);
    expect(MeterTelemetryProcessor62.recommendActions0(0, 0, 0)).toContain('Continue routine monitoring');
  });

  it('forecastDemand0 projects forward', () => {
    const forecast = MeterTelemetryProcessor62.forecastDemand0([10, 12, 11, 13], 5);
    expect(forecast).toHaveLength(5);
  });


  it('analyzeWindow1 handles empty and populated series', () => {
    expect(MeterTelemetryProcessor62.analyzeWindow1([])).toEqual({
      averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0,
    });
    const result = MeterTelemetryProcessor62.analyzeWindow1([
      { meterId: 'm1', timestamp: '2024-01-01T00:00:00Z', flowLpm: 10, pressureBar: 3, temperatureC: 18, batteryPct: 90 },
      { meterId: 'm1', timestamp: '2024-01-01T00:30:00Z', flowLpm: 40, pressureBar: 1.2, temperatureC: 18, batteryPct: 89 },
    ]);
    expect(result.peakFlow).toBe(40);
    expect(result.anomalyScore).toBeGreaterThan(0);
  });

  it('estimateNrw1 classifies risk bands', () => {
    const high = MeterTelemetryProcessor62.estimateNrw1({
      dmaId: 'd1', inflowM3: 100, billedM3: 50, nightMinLph: 100, connections: 10,
    });
    expect(high.riskBand).toBe('high');
    const low = MeterTelemetryProcessor62.estimateNrw1({
      dmaId: 'd1', inflowM3: 100, billedM3: 95, nightMinLph: 10, connections: 10,
    });
    expect(low.riskBand).toBe('low');
  });

  it('recommendActions1 returns actionable guidance', () => {
    const actions = MeterTelemetryProcessor62.recommendActions1(0.8, 0.4, 7);
    expect(actions.length).toBeGreaterThan(0);
    expect(MeterTelemetryProcessor62.recommendActions1(0, 0, 0)).toContain('Continue routine monitoring');
  });

  it('forecastDemand1 projects forward', () => {
    const forecast = MeterTelemetryProcessor62.forecastDemand1([10, 12, 11, 13], 5);
    expect(forecast).toHaveLength(5);
  });


  it('analyzeWindow2 handles empty and populated series', () => {
    expect(MeterTelemetryProcessor62.analyzeWindow2([])).toEqual({
      averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0,
    });
    const result = MeterTelemetryProcessor62.analyzeWindow2([
      { meterId: 'm1', timestamp: '2024-01-01T00:00:00Z', flowLpm: 10, pressureBar: 3, temperatureC: 18, batteryPct: 90 },
      { meterId: 'm1', timestamp: '2024-01-01T00:30:00Z', flowLpm: 40, pressureBar: 1.2, temperatureC: 18, batteryPct: 89 },
    ]);
    expect(result.peakFlow).toBe(40);
    expect(result.anomalyScore).toBeGreaterThan(0);
  });

  it('estimateNrw2 classifies risk bands', () => {
    const high = MeterTelemetryProcessor62.estimateNrw2({
      dmaId: 'd1', inflowM3: 100, billedM3: 50, nightMinLph: 100, connections: 10,
    });
    expect(high.riskBand).toBe('high');
    const low = MeterTelemetryProcessor62.estimateNrw2({
      dmaId: 'd1', inflowM3: 100, billedM3: 95, nightMinLph: 10, connections: 10,
    });
    expect(low.riskBand).toBe('low');
  });

  it('recommendActions2 returns actionable guidance', () => {
    const actions = MeterTelemetryProcessor62.recommendActions2(0.8, 0.4, 7);
    expect(actions.length).toBeGreaterThan(0);
    expect(MeterTelemetryProcessor62.recommendActions2(0, 0, 0)).toContain('Continue routine monitoring');
  });

  it('forecastDemand2 projects forward', () => {
    const forecast = MeterTelemetryProcessor62.forecastDemand2([10, 12, 11, 13], 5);
    expect(forecast).toHaveLength(5);
  });


  it('analyzeWindow3 handles empty and populated series', () => {
    expect(MeterTelemetryProcessor62.analyzeWindow3([])).toEqual({
      averageFlow: 0, peakFlow: 0, minPressure: 0, anomalyScore: 0, dropouts: 0,
    });
    const result = MeterTelemetryProcessor62.analyzeWindow3([
      { meterId: 'm1', timestamp: '2024-01-01T00:00:00Z', flowLpm: 10, pressureBar: 3, temperatureC: 18, batteryPct: 90 },
      { meterId: 'm1', timestamp: '2024-01-01T00:30:00Z', flowLpm: 40, pressureBar: 1.2, temperatureC: 18, batteryPct: 89 },
    ]);
    expect(result.peakFlow).toBe(40);
    expect(result.anomalyScore).toBeGreaterThan(0);
  });

  it('estimateNrw3 classifies risk bands', () => {
    const high = MeterTelemetryProcessor62.estimateNrw3({
      dmaId: 'd1', inflowM3: 100, billedM3: 50, nightMinLph: 100, connections: 10,
    });
    expect(high.riskBand).toBe('high');
    const low = MeterTelemetryProcessor62.estimateNrw3({
      dmaId: 'd1', inflowM3: 100, billedM3: 95, nightMinLph: 10, connections: 10,
    });
    expect(low.riskBand).toBe('low');
  });

  it('recommendActions3 returns actionable guidance', () => {
    const actions = MeterTelemetryProcessor62.recommendActions3(0.8, 0.4, 7);
    expect(actions.length).toBeGreaterThan(0);
    expect(MeterTelemetryProcessor62.recommendActions3(0, 0, 0)).toContain('Continue routine monitoring');
  });

  it('forecastDemand3 projects forward', () => {
    const forecast = MeterTelemetryProcessor62.forecastDemand3([10, 12, 11, 13], 5);
    expect(forecast).toHaveLength(5);
  });

});
