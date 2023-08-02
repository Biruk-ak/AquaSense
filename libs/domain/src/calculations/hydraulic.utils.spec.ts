/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Hydraulic tests
 * @copyright Biruk-ak
 */


import { HydraulicCalculations } from './hydraulic.utils';
describe('HydraulicCalculations', () => {

  it('computeFlowBalance0 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance0(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance0(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability0 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability0(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability0(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount0 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount0(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance1 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance1(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance1(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability1 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability1(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability1(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount1 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount1(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance2 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance2(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance2(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability2 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability2(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability2(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount2 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount2(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance3 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance3(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance3(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability3 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability3(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability3(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount3 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount3(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance4 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance4(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance4(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability4 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability4(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability4(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount4 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount4(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance5 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance5(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance5(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability5 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability5(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability5(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount5 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount5(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance6 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance6(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance6(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability6 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability6(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability6(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount6 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount6(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance7 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance7(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance7(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability7 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability7(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability7(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount7 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount7(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance8 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance8(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance8(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability8 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability8(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability8(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount8 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount8(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance9 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance9(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance9(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability9 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability9(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability9(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount9 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount9(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance10 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance10(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance10(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability10 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability10(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability10(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount10 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount10(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance11 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance11(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance11(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability11 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability11(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability11(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount11 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount11(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance12 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance12(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance12(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability12 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability12(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability12(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount12 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount12(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance13 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance13(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance13(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability13 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability13(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability13(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount13 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount13(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance14 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance14(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance14(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability14 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability14(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability14(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount14 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount14(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance15 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance15(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance15(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability15 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability15(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability15(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount15 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount15(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance16 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance16(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance16(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability16 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability16(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability16(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount16 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount16(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance17 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance17(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance17(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability17 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability17(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability17(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount17 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount17(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance18 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance18(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance18(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability18 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability18(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability18(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount18 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount18(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance19 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance19(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance19(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability19 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability19(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability19(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount19 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount19(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance20 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance20(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance20(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability20 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability20(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability20(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount20 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount20(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance21 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance21(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance21(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability21 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability21(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability21(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount21 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount21(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance22 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance22(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance22(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability22 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability22(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability22(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount22 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount22(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance23 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance23(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance23(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability23 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability23(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability23(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount23 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount23(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance24 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance24(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance24(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability24 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability24(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability24(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount24 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount24(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance25 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance25(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance25(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability25 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability25(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability25(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount25 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount25(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance26 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance26(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance26(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability26 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability26(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability26(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount26 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount26(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance27 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance27(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance27(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability27 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability27(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability27(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount27 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount27(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance28 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance28(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance28(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability28 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability28(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability28(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount28 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount28(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance29 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance29(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance29(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability29 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability29(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability29(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount29 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount29(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance30 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance30(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance30(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability30 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability30(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability30(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount30 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount30(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance31 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance31(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance31(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability31 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability31(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability31(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount31 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount31(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance32 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance32(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance32(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability32 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability32(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability32(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount32 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount32(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance33 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance33(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance33(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability33 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability33(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability33(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount33 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount33(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance34 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance34(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance34(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability34 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability34(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability34(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount34 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount34(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance35 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance35(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance35(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability35 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability35(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability35(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount35 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount35(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance36 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance36(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance36(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability36 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability36(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability36(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount36 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount36(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance37 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance37(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance37(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability37 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability37(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability37(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount37 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount37(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance38 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance38(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance38(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability38 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability38(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability38(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount38 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount38(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance39 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance39(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance39(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability39 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability39(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability39(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount39 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount39(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance40 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance40(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance40(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability40 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability40(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability40(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount40 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount40(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance41 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance41(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance41(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability41 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability41(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability41(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount41 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount41(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance42 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance42(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance42(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability42 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability42(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability42(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount42 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount42(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance43 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance43(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance43(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability43 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability43(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability43(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount43 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount43(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance44 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance44(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance44(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability44 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability44(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability44(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount44 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount44(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance45 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance45(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance45(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability45 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability45(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability45(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount45 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount45(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance46 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance46(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance46(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability46 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability46(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability46(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount46 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount46(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance47 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance47(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance47(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability47 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability47(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability47(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount47 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount47(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance48 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance48(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance48(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability48 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability48(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability48(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount48 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount48(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });


  it('computeFlowBalance49 detects imbalance', () => {
    expect(HydraulicCalculations.computeFlowBalance49(100, 80, 10)).toBeGreaterThan(0);
    expect(HydraulicCalculations.computeFlowBalance49(100, 100, 0)).toBe(0);
  });

  it('estimateLeakProbability49 scales with night flow', () => {
    const low = HydraulicCalculations.estimateLeakProbability49(10, 10, 40);
    const high = HydraulicCalculations.estimateLeakProbability49(40, 10, 40);
    expect(high).toBeGreaterThan(low);
  });

  it('tieredBillAmount49 applies progressive rates', () => {
    const amount = HydraulicCalculations.tieredBillAmount49(25, [
      { upTo: 10, rate: 1 },
      { upTo: 20, rate: 2 },
      { upTo: 100, rate: 3 },
    ]);
    expect(amount).toBe(10 * 1 + 10 * 2 + 5 * 3);
  });

});
