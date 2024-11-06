/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Root application module
 * @copyright Biruk-ak
 */

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from '../../../libs/common/src/common.module';
import { CentralDistrictModule } from './modules/districts/central-district/central-district.module';
import { NorthDistrictModule } from './modules/districts/north-district/north-district.module';
import { SouthDistrictModule } from './modules/districts/south-district/south-district.module';
import { EastDistrictModule } from './modules/districts/east-district/east-district.module';
import { WestDistrictModule } from './modules/districts/west-district/west-district.module';
import { HarborDistrictModule } from './modules/districts/harbor-district/harbor-district.module';
import { HighlandDistrictModule } from './modules/districts/highland-district/highland-district.module';
import { ValleyDistrictModule } from './modules/districts/valley-district/valley-district.module';
import { RiversideDistrictModule } from './modules/districts/riverside-district/riverside-district.module';
import { LakesideDistrictModule } from './modules/districts/lakeside-district/lakeside-district.module';
import { IndustrialDistrictModule } from './modules/districts/industrial-district/industrial-district.module';
import { ResidentialDistrictModule } from './modules/districts/residential-district/residential-district.module';
import { CommercialDistrictModule } from './modules/districts/commercial-district/commercial-district.module';
import { SuburbanDistrictModule } from './modules/districts/suburban-district/suburban-district.module';
import { DowntownDistrictModule } from './modules/districts/downtown-district/downtown-district.module';
import { UptownDistrictModule } from './modules/districts/uptown-district/uptown-district.module';
import { MidtownDistrictModule } from './modules/districts/midtown-district/midtown-district.module';
import { CoastalDistrictModule } from './modules/districts/coastal-district/coastal-district.module';
import { InlandDistrictModule } from './modules/districts/inland-district/inland-district.module';
import { FrontierDistrictModule } from './modules/districts/frontier-district/frontier-district.module';
import { ResidentialMeterBatch1Module } from './modules/meters/residential-meter-batch1/residential-meter-batch1.module';
import { ResidentialMeterBatch2Module } from './modules/meters/residential-meter-batch2/residential-meter-batch2.module';
import { ResidentialMeterBatch3Module } from './modules/meters/residential-meter-batch3/residential-meter-batch3.module';
import { ResidentialMeterBatch4Module } from './modules/meters/residential-meter-batch4/residential-meter-batch4.module';
import { CommercialMeterBatch1Module } from './modules/meters/commercial-meter-batch1/commercial-meter-batch1.module';
import { CommercialMeterBatch2Module } from './modules/meters/commercial-meter-batch2/commercial-meter-batch2.module';
import { CommercialMeterBatch3Module } from './modules/meters/commercial-meter-batch3/commercial-meter-batch3.module';
import { CommercialMeterBatch4Module } from './modules/meters/commercial-meter-batch4/commercial-meter-batch4.module';
import { IndustrialMeterBatch1Module } from './modules/meters/industrial-meter-batch1/industrial-meter-batch1.module';
import { IndustrialMeterBatch2Module } from './modules/meters/industrial-meter-batch2/industrial-meter-batch2.module';
import { IndustrialMeterBatch3Module } from './modules/meters/industrial-meter-batch3/industrial-meter-batch3.module';
import { IndustrialMeterBatch4Module } from './modules/meters/industrial-meter-batch4/industrial-meter-batch4.module';
import { AgriculturalMeterBatch1Module } from './modules/meters/agricultural-meter-batch1/agricultural-meter-batch1.module';
import { AgriculturalMeterBatch2Module } from './modules/meters/agricultural-meter-batch2/agricultural-meter-batch2.module';
import { AgriculturalMeterBatch3Module } from './modules/meters/agricultural-meter-batch3/agricultural-meter-batch3.module';
import { AgriculturalMeterBatch4Module } from './modules/meters/agricultural-meter-batch4/agricultural-meter-batch4.module';
import { MunicipalMeterBatch1Module } from './modules/meters/municipal-meter-batch1/municipal-meter-batch1.module';
import { MunicipalMeterBatch2Module } from './modules/meters/municipal-meter-batch2/municipal-meter-batch2.module';
import { MunicipalMeterBatch3Module } from './modules/meters/municipal-meter-batch3/municipal-meter-batch3.module';
import { MunicipalMeterBatch4Module } from './modules/meters/municipal-meter-batch4/municipal-meter-batch4.module';
import { FireServiceMeterBatch1Module } from './modules/meters/fire-service-meter-batch1/fire-service-meter-batch1.module';
import { FireServiceMeterBatch2Module } from './modules/meters/fire-service-meter-batch2/fire-service-meter-batch2.module';
import { FireServiceMeterBatch3Module } from './modules/meters/fire-service-meter-batch3/fire-service-meter-batch3.module';
import { FireServiceMeterBatch4Module } from './modules/meters/fire-service-meter-batch4/fire-service-meter-batch4.module';
import { IrrigationMeterBatch1Module } from './modules/meters/irrigation-meter-batch1/irrigation-meter-batch1.module';
import { IrrigationMeterBatch2Module } from './modules/meters/irrigation-meter-batch2/irrigation-meter-batch2.module';
import { IrrigationMeterBatch3Module } from './modules/meters/irrigation-meter-batch3/irrigation-meter-batch3.module';
import { IrrigationMeterBatch4Module } from './modules/meters/irrigation-meter-batch4/irrigation-meter-batch4.module';
import { BulkMeterBatch1Module } from './modules/meters/bulk-meter-batch1/bulk-meter-batch1.module';
import { BulkMeterBatch2Module } from './modules/meters/bulk-meter-batch2/bulk-meter-batch2.module';
import { BulkMeterBatch3Module } from './modules/meters/bulk-meter-batch3/bulk-meter-batch3.module';
import { BulkMeterBatch4Module } from './modules/meters/bulk-meter-batch4/bulk-meter-batch4.module';
import { MasterMeterBatch1Module } from './modules/meters/master-meter-batch1/master-meter-batch1.module';
import { MasterMeterBatch2Module } from './modules/meters/master-meter-batch2/master-meter-batch2.module';
import { MasterMeterBatch3Module } from './modules/meters/master-meter-batch3/master-meter-batch3.module';
import { MasterMeterBatch4Module } from './modules/meters/master-meter-batch4/master-meter-batch4.module';
import { SubmeterMeterBatch1Module } from './modules/meters/submeter-meter-batch1/submeter-meter-batch1.module';
import { SubmeterMeterBatch2Module } from './modules/meters/submeter-meter-batch2/submeter-meter-batch2.module';
import { SubmeterMeterBatch3Module } from './modules/meters/submeter-meter-batch3/submeter-meter-batch3.module';
import { SubmeterMeterBatch4Module } from './modules/meters/submeter-meter-batch4/submeter-meter-batch4.module';
import { LeakZone01Module } from './modules/leak-detection/leak-zone01/leak-zone01.module';
import { LeakZone02Module } from './modules/leak-detection/leak-zone02/leak-zone02.module';
import { LeakZone03Module } from './modules/leak-detection/leak-zone03/leak-zone03.module';
import { LeakZone04Module } from './modules/leak-detection/leak-zone04/leak-zone04.module';
import { LeakZone05Module } from './modules/leak-detection/leak-zone05/leak-zone05.module';
import { LeakZone06Module } from './modules/leak-detection/leak-zone06/leak-zone06.module';
import { LeakZone07Module } from './modules/leak-detection/leak-zone07/leak-zone07.module';
import { LeakZone08Module } from './modules/leak-detection/leak-zone08/leak-zone08.module';
import { LeakZone09Module } from './modules/leak-detection/leak-zone09/leak-zone09.module';
import { LeakZone10Module } from './modules/leak-detection/leak-zone10/leak-zone10.module';
import { LeakZone11Module } from './modules/leak-detection/leak-zone11/leak-zone11.module';
import { LeakZone12Module } from './modules/leak-detection/leak-zone12/leak-zone12.module';
import { LeakZone13Module } from './modules/leak-detection/leak-zone13/leak-zone13.module';
import { LeakZone14Module } from './modules/leak-detection/leak-zone14/leak-zone14.module';
import { LeakZone15Module } from './modules/leak-detection/leak-zone15/leak-zone15.module';
import { LeakZone16Module } from './modules/leak-detection/leak-zone16/leak-zone16.module';
import { LeakZone17Module } from './modules/leak-detection/leak-zone17/leak-zone17.module';
import { LeakZone18Module } from './modules/leak-detection/leak-zone18/leak-zone18.module';
import { LeakZone19Module } from './modules/leak-detection/leak-zone19/leak-zone19.module';
import { LeakZone20Module } from './modules/leak-detection/leak-zone20/leak-zone20.module';
import { LeakZone21Module } from './modules/leak-detection/leak-zone21/leak-zone21.module';
import { LeakZone22Module } from './modules/leak-detection/leak-zone22/leak-zone22.module';
import { LeakZone23Module } from './modules/leak-detection/leak-zone23/leak-zone23.module';
import { LeakZone24Module } from './modules/leak-detection/leak-zone24/leak-zone24.module';
import { LifelineBillingCycle1Module } from './modules/billing/lifeline-billing-cycle1/lifeline-billing-cycle1.module';
import { LifelineBillingCycle2Module } from './modules/billing/lifeline-billing-cycle2/lifeline-billing-cycle2.module';
import { LifelineBillingCycle3Module } from './modules/billing/lifeline-billing-cycle3/lifeline-billing-cycle3.module';
import { LifelineBillingCycle4Module } from './modules/billing/lifeline-billing-cycle4/lifeline-billing-cycle4.module';
import { LifelineBillingCycle5Module } from './modules/billing/lifeline-billing-cycle5/lifeline-billing-cycle5.module';
import { StandardBillingCycle1Module } from './modules/billing/standard-billing-cycle1/standard-billing-cycle1.module';
import { StandardBillingCycle2Module } from './modules/billing/standard-billing-cycle2/standard-billing-cycle2.module';
import { StandardBillingCycle3Module } from './modules/billing/standard-billing-cycle3/standard-billing-cycle3.module';
import { StandardBillingCycle4Module } from './modules/billing/standard-billing-cycle4/standard-billing-cycle4.module';
import { StandardBillingCycle5Module } from './modules/billing/standard-billing-cycle5/standard-billing-cycle5.module';
import { HighUseBillingCycle1Module } from './modules/billing/high-use-billing-cycle1/high-use-billing-cycle1.module';
import { HighUseBillingCycle2Module } from './modules/billing/high-use-billing-cycle2/high-use-billing-cycle2.module';
import { HighUseBillingCycle3Module } from './modules/billing/high-use-billing-cycle3/high-use-billing-cycle3.module';
import { HighUseBillingCycle4Module } from './modules/billing/high-use-billing-cycle4/high-use-billing-cycle4.module';
import { HighUseBillingCycle5Module } from './modules/billing/high-use-billing-cycle5/high-use-billing-cycle5.module';
import { CommercialBillingCycle1Module } from './modules/billing/commercial-billing-cycle1/commercial-billing-cycle1.module';
import { CommercialBillingCycle2Module } from './modules/billing/commercial-billing-cycle2/commercial-billing-cycle2.module';
import { CommercialBillingCycle3Module } from './modules/billing/commercial-billing-cycle3/commercial-billing-cycle3.module';
import { CommercialBillingCycle4Module } from './modules/billing/commercial-billing-cycle4/commercial-billing-cycle4.module';
import { CommercialBillingCycle5Module } from './modules/billing/commercial-billing-cycle5/commercial-billing-cycle5.module';
import { IndustrialBillingCycle1Module } from './modules/billing/industrial-billing-cycle1/industrial-billing-cycle1.module';
import { IndustrialBillingCycle2Module } from './modules/billing/industrial-billing-cycle2/industrial-billing-cycle2.module';
import { IndustrialBillingCycle3Module } from './modules/billing/industrial-billing-cycle3/industrial-billing-cycle3.module';
import { IndustrialBillingCycle4Module } from './modules/billing/industrial-billing-cycle4/industrial-billing-cycle4.module';
import { IndustrialBillingCycle5Module } from './modules/billing/industrial-billing-cycle5/industrial-billing-cycle5.module';
import { AgriculturalBillingCycle1Module } from './modules/billing/agricultural-billing-cycle1/agricultural-billing-cycle1.module';
import { AgriculturalBillingCycle2Module } from './modules/billing/agricultural-billing-cycle2/agricultural-billing-cycle2.module';
import { AgriculturalBillingCycle3Module } from './modules/billing/agricultural-billing-cycle3/agricultural-billing-cycle3.module';
import { AgriculturalBillingCycle4Module } from './modules/billing/agricultural-billing-cycle4/agricultural-billing-cycle4.module';
import { AgriculturalBillingCycle5Module } from './modules/billing/agricultural-billing-cycle5/agricultural-billing-cycle5.module';
import { PreventiveWorkOrder1Module } from './modules/maintenance/preventive-work-order1/preventive-work-order1.module';
import { PreventiveWorkOrder2Module } from './modules/maintenance/preventive-work-order2/preventive-work-order2.module';
import { PreventiveWorkOrder3Module } from './modules/maintenance/preventive-work-order3/preventive-work-order3.module';
import { CorrectiveWorkOrder1Module } from './modules/maintenance/corrective-work-order1/corrective-work-order1.module';
import { CorrectiveWorkOrder2Module } from './modules/maintenance/corrective-work-order2/corrective-work-order2.module';
import { CorrectiveWorkOrder3Module } from './modules/maintenance/corrective-work-order3/corrective-work-order3.module';
import { EmergencyWorkOrder1Module } from './modules/maintenance/emergency-work-order1/emergency-work-order1.module';
import { EmergencyWorkOrder2Module } from './modules/maintenance/emergency-work-order2/emergency-work-order2.module';
import { EmergencyWorkOrder3Module } from './modules/maintenance/emergency-work-order3/emergency-work-order3.module';
import { InspectionWorkOrder1Module } from './modules/maintenance/inspection-work-order1/inspection-work-order1.module';
import { InspectionWorkOrder2Module } from './modules/maintenance/inspection-work-order2/inspection-work-order2.module';
import { InspectionWorkOrder3Module } from './modules/maintenance/inspection-work-order3/inspection-work-order3.module';
import { CalibrationWorkOrder1Module } from './modules/maintenance/calibration-work-order1/calibration-work-order1.module';
import { CalibrationWorkOrder2Module } from './modules/maintenance/calibration-work-order2/calibration-work-order2.module';
import { CalibrationWorkOrder3Module } from './modules/maintenance/calibration-work-order3/calibration-work-order3.module';
import { FlushingWorkOrder1Module } from './modules/maintenance/flushing-work-order1/flushing-work-order1.module';
import { FlushingWorkOrder2Module } from './modules/maintenance/flushing-work-order2/flushing-work-order2.module';
import { FlushingWorkOrder3Module } from './modules/maintenance/flushing-work-order3/flushing-work-order3.module';
import { ValveExerciseWorkOrder1Module } from './modules/maintenance/valve-exercise-work-order1/valve-exercise-work-order1.module';
import { ValveExerciseWorkOrder2Module } from './modules/maintenance/valve-exercise-work-order2/valve-exercise-work-order2.module';
import { ValveExerciseWorkOrder3Module } from './modules/maintenance/valve-exercise-work-order3/valve-exercise-work-order3.module';
import { HydrantTestWorkOrder1Module } from './modules/maintenance/hydrant-test-work-order1/hydrant-test-work-order1.module';
import { HydrantTestWorkOrder2Module } from './modules/maintenance/hydrant-test-work-order2/hydrant-test-work-order2.module';
import { HydrantTestWorkOrder3Module } from './modules/maintenance/hydrant-test-work-order3/hydrant-test-work-order3.module';
import { PipeRepairWorkOrder1Module } from './modules/maintenance/pipe-repair-work-order1/pipe-repair-work-order1.module';
import { PipeRepairWorkOrder2Module } from './modules/maintenance/pipe-repair-work-order2/pipe-repair-work-order2.module';
import { PipeRepairWorkOrder3Module } from './modules/maintenance/pipe-repair-work-order3/pipe-repair-work-order3.module';
import { PumpServiceWorkOrder1Module } from './modules/maintenance/pump-service-work-order1/pump-service-work-order1.module';
import { PumpServiceWorkOrder2Module } from './modules/maintenance/pump-service-work-order2/pump-service-work-order2.module';
import { PumpServiceWorkOrder3Module } from './modules/maintenance/pump-service-work-order3/pump-service-work-order3.module';
import { NewConnectionRequest1Module } from './modules/service-requests/new-connection-request1/new-connection-request1.module';
import { NewConnectionRequest2Module } from './modules/service-requests/new-connection-request2/new-connection-request2.module';
import { DisconnectionRequest1Module } from './modules/service-requests/disconnection-request1/disconnection-request1.module';
import { DisconnectionRequest2Module } from './modules/service-requests/disconnection-request2/disconnection-request2.module';
import { MeterReplaceRequest1Module } from './modules/service-requests/meter-replace-request1/meter-replace-request1.module';
import { MeterReplaceRequest2Module } from './modules/service-requests/meter-replace-request2/meter-replace-request2.module';
import { PressureIssueRequest1Module } from './modules/service-requests/pressure-issue-request1/pressure-issue-request1.module';
import { PressureIssueRequest2Module } from './modules/service-requests/pressure-issue-request2/pressure-issue-request2.module';
import { WaterQualityRequest1Module } from './modules/service-requests/water-quality-request1/water-quality-request1.module';
import { WaterQualityRequest2Module } from './modules/service-requests/water-quality-request2/water-quality-request2.module';
import { BillingDisputeRequest1Module } from './modules/service-requests/billing-dispute-request1/billing-dispute-request1.module';
import { BillingDisputeRequest2Module } from './modules/service-requests/billing-dispute-request2/billing-dispute-request2.module';
import { LeakReportRequest1Module } from './modules/service-requests/leak-report-request1/leak-report-request1.module';
import { LeakReportRequest2Module } from './modules/service-requests/leak-report-request2/leak-report-request2.module';
import { NoWaterRequest1Module } from './modules/service-requests/no-water-request1/no-water-request1.module';
import { NoWaterRequest2Module } from './modules/service-requests/no-water-request2/no-water-request2.module';
import { LowPressureRequest1Module } from './modules/service-requests/low-pressure-request1/low-pressure-request1.module';
import { LowPressureRequest2Module } from './modules/service-requests/low-pressure-request2/low-pressure-request2.module';
import { HighBillRequest1Module } from './modules/service-requests/high-bill-request1/high-bill-request1.module';
import { HighBillRequest2Module } from './modules/service-requests/high-bill-request2/high-bill-request2.module';
import { MoveInRequest1Module } from './modules/service-requests/move-in-request1/move-in-request1.module';
import { MoveInRequest2Module } from './modules/service-requests/move-in-request2/move-in-request2.module';
import { MoveOutRequest1Module } from './modules/service-requests/move-out-request1/move-out-request1.module';
import { MoveOutRequest2Module } from './modules/service-requests/move-out-request2/move-out-request2.module';
import { AccountUpdateRequest1Module } from './modules/service-requests/account-update-request1/account-update-request1.module';
import { AccountUpdateRequest2Module } from './modules/service-requests/account-update-request2/account-update-request2.module';
import { PaymentPlanRequest1Module } from './modules/service-requests/payment-plan-request1/payment-plan-request1.module';
import { PaymentPlanRequest2Module } from './modules/service-requests/payment-plan-request2/payment-plan-request2.module';
import { InspectionRequest1Module } from './modules/service-requests/inspection-request1/inspection-request1.module';
import { InspectionRequest2Module } from './modules/service-requests/inspection-request2/inspection-request2.module';
import { PVCPipeSegment1Module } from './modules/infrastructure/pvc-pipe-segment1/pvc-pipe-segment1.module';
import { PVCPipeSegment2Module } from './modules/infrastructure/pvc-pipe-segment2/pvc-pipe-segment2.module';
import { PVCPipeSegment3Module } from './modules/infrastructure/pvc-pipe-segment3/pvc-pipe-segment3.module';
import { HDPEPipeSegment1Module } from './modules/infrastructure/hdpe-pipe-segment1/hdpe-pipe-segment1.module';
import { HDPEPipeSegment2Module } from './modules/infrastructure/hdpe-pipe-segment2/hdpe-pipe-segment2.module';
import { HDPEPipeSegment3Module } from './modules/infrastructure/hdpe-pipe-segment3/hdpe-pipe-segment3.module';
import { DuctileIronPipeSegment1Module } from './modules/infrastructure/ductile-iron-pipe-segment1/ductile-iron-pipe-segment1.module';
import { DuctileIronPipeSegment2Module } from './modules/infrastructure/ductile-iron-pipe-segment2/ductile-iron-pipe-segment2.module';
import { DuctileIronPipeSegment3Module } from './modules/infrastructure/ductile-iron-pipe-segment3/ductile-iron-pipe-segment3.module';
import { CastIronPipeSegment1Module } from './modules/infrastructure/cast-iron-pipe-segment1/cast-iron-pipe-segment1.module';
import { CastIronPipeSegment2Module } from './modules/infrastructure/cast-iron-pipe-segment2/cast-iron-pipe-segment2.module';
import { CastIronPipeSegment3Module } from './modules/infrastructure/cast-iron-pipe-segment3/cast-iron-pipe-segment3.module';
import { SteelPipeSegment1Module } from './modules/infrastructure/steel-pipe-segment1/steel-pipe-segment1.module';
import { SteelPipeSegment2Module } from './modules/infrastructure/steel-pipe-segment2/steel-pipe-segment2.module';
import { SteelPipeSegment3Module } from './modules/infrastructure/steel-pipe-segment3/steel-pipe-segment3.module';
import { ConcretePipeSegment1Module } from './modules/infrastructure/concrete-pipe-segment1/concrete-pipe-segment1.module';
import { ConcretePipeSegment2Module } from './modules/infrastructure/concrete-pipe-segment2/concrete-pipe-segment2.module';
import { ConcretePipeSegment3Module } from './modules/infrastructure/concrete-pipe-segment3/concrete-pipe-segment3.module';
import { CopperPipeSegment1Module } from './modules/infrastructure/copper-pipe-segment1/copper-pipe-segment1.module';
import { CopperPipeSegment2Module } from './modules/infrastructure/copper-pipe-segment2/copper-pipe-segment2.module';
import { CopperPipeSegment3Module } from './modules/infrastructure/copper-pipe-segment3/copper-pipe-segment3.module';
import { PEPipeSegment1Module } from './modules/infrastructure/pe-pipe-segment1/pe-pipe-segment1.module';
import { PEPipeSegment2Module } from './modules/infrastructure/pe-pipe-segment2/pe-pipe-segment2.module';
import { PEPipeSegment3Module } from './modules/infrastructure/pe-pipe-segment3/pe-pipe-segment3.module';
import { PumpStationAsset1Module } from './modules/infrastructure/assets/pump-station-asset1/pump-station-asset1.module';
import { PumpStationAsset2Module } from './modules/infrastructure/assets/pump-station-asset2/pump-station-asset2.module';
import { ReservoirAsset1Module } from './modules/infrastructure/assets/reservoir-asset1/reservoir-asset1.module';
import { ReservoirAsset2Module } from './modules/infrastructure/assets/reservoir-asset2/reservoir-asset2.module';
import { TreatmentPlantAsset1Module } from './modules/infrastructure/assets/treatment-plant-asset1/treatment-plant-asset1.module';
import { TreatmentPlantAsset2Module } from './modules/infrastructure/assets/treatment-plant-asset2/treatment-plant-asset2.module';
import { ValveAsset1Module } from './modules/infrastructure/assets/valve-asset1/valve-asset1.module';
import { ValveAsset2Module } from './modules/infrastructure/assets/valve-asset2/valve-asset2.module';
import { HydrantAsset1Module } from './modules/infrastructure/assets/hydrant-asset1/hydrant-asset1.module';
import { HydrantAsset2Module } from './modules/infrastructure/assets/hydrant-asset2/hydrant-asset2.module';
import { ManholeAsset1Module } from './modules/infrastructure/assets/manhole-asset1/manhole-asset1.module';
import { ManholeAsset2Module } from './modules/infrastructure/assets/manhole-asset2/manhole-asset2.module';
import { BoosterAsset1Module } from './modules/infrastructure/assets/booster-asset1/booster-asset1.module';
import { BoosterAsset2Module } from './modules/infrastructure/assets/booster-asset2/booster-asset2.module';
import { TankAsset1Module } from './modules/infrastructure/assets/tank-asset1/tank-asset1.module';
import { TankAsset2Module } from './modules/infrastructure/assets/tank-asset2/tank-asset2.module';
import { WellAsset1Module } from './modules/infrastructure/assets/well-asset1/well-asset1.module';
import { WellAsset2Module } from './modules/infrastructure/assets/well-asset2/well-asset2.module';
import { IntakeAsset1Module } from './modules/infrastructure/assets/intake-asset1/intake-asset1.module';
import { IntakeAsset2Module } from './modules/infrastructure/assets/intake-asset2/intake-asset2.module';
import { FilterAsset1Module } from './modules/infrastructure/assets/filter-asset1/filter-asset1.module';
import { FilterAsset2Module } from './modules/infrastructure/assets/filter-asset2/filter-asset2.module';
import { ChlorinatorAsset1Module } from './modules/infrastructure/assets/chlorinator-asset1/chlorinator-asset1.module';
import { ChlorinatorAsset2Module } from './modules/infrastructure/assets/chlorinator-asset2/chlorinator-asset2.module';
import { EmailNotificationTemplate1Module } from './modules/notifications/email-notification-template1/email-notification-template1.module';
import { EmailNotificationTemplate2Module } from './modules/notifications/email-notification-template2/email-notification-template2.module';
import { EmailNotificationTemplate3Module } from './modules/notifications/email-notification-template3/email-notification-template3.module';
import { EmailNotificationTemplate4Module } from './modules/notifications/email-notification-template4/email-notification-template4.module';
import { EmailNotificationTemplate5Module } from './modules/notifications/email-notification-template5/email-notification-template5.module';
import { EmailNotificationTemplate6Module } from './modules/notifications/email-notification-template6/email-notification-template6.module';
import { SmsNotificationTemplate1Module } from './modules/notifications/sms-notification-template1/sms-notification-template1.module';
import { SmsNotificationTemplate2Module } from './modules/notifications/sms-notification-template2/sms-notification-template2.module';
import { SmsNotificationTemplate3Module } from './modules/notifications/sms-notification-template3/sms-notification-template3.module';
import { SmsNotificationTemplate4Module } from './modules/notifications/sms-notification-template4/sms-notification-template4.module';
import { SmsNotificationTemplate5Module } from './modules/notifications/sms-notification-template5/sms-notification-template5.module';
import { SmsNotificationTemplate6Module } from './modules/notifications/sms-notification-template6/sms-notification-template6.module';
import { PushNotificationTemplate1Module } from './modules/notifications/push-notification-template1/push-notification-template1.module';
import { PushNotificationTemplate2Module } from './modules/notifications/push-notification-template2/push-notification-template2.module';
import { PushNotificationTemplate3Module } from './modules/notifications/push-notification-template3/push-notification-template3.module';
import { PushNotificationTemplate4Module } from './modules/notifications/push-notification-template4/push-notification-template4.module';
import { PushNotificationTemplate5Module } from './modules/notifications/push-notification-template5/push-notification-template5.module';
import { PushNotificationTemplate6Module } from './modules/notifications/push-notification-template6/push-notification-template6.module';
import { InAppNotificationTemplate1Module } from './modules/notifications/in-app-notification-template1/in-app-notification-template1.module';
import { InAppNotificationTemplate2Module } from './modules/notifications/in-app-notification-template2/in-app-notification-template2.module';
import { InAppNotificationTemplate3Module } from './modules/notifications/in-app-notification-template3/in-app-notification-template3.module';
import { InAppNotificationTemplate4Module } from './modules/notifications/in-app-notification-template4/in-app-notification-template4.module';
import { InAppNotificationTemplate5Module } from './modules/notifications/in-app-notification-template5/in-app-notification-template5.module';
import { InAppNotificationTemplate6Module } from './modules/notifications/in-app-notification-template6/in-app-notification-template6.module';
import { WebhookNotificationTemplate1Module } from './modules/notifications/webhook-notification-template1/webhook-notification-template1.module';
import { WebhookNotificationTemplate2Module } from './modules/notifications/webhook-notification-template2/webhook-notification-template2.module';
import { WebhookNotificationTemplate3Module } from './modules/notifications/webhook-notification-template3/webhook-notification-template3.module';
import { WebhookNotificationTemplate4Module } from './modules/notifications/webhook-notification-template4/webhook-notification-template4.module';
import { WebhookNotificationTemplate5Module } from './modules/notifications/webhook-notification-template5/webhook-notification-template5.module';
import { WebhookNotificationTemplate6Module } from './modules/notifications/webhook-notification-template6/webhook-notification-template6.module';
import { ConsumptionAnalyticsSlice1Module } from './modules/analytics/consumption-analytics-slice1/consumption-analytics-slice1.module';
import { ConsumptionAnalyticsSlice2Module } from './modules/analytics/consumption-analytics-slice2/consumption-analytics-slice2.module';
import { ConsumptionAnalyticsSlice3Module } from './modules/analytics/consumption-analytics-slice3/consumption-analytics-slice3.module';
import { ConsumptionAnalyticsSlice4Module } from './modules/analytics/consumption-analytics-slice4/consumption-analytics-slice4.module';
import { ConsumptionAnalyticsSlice5Module } from './modules/analytics/consumption-analytics-slice5/consumption-analytics-slice5.module';
import { RevenueAnalyticsSlice1Module } from './modules/analytics/revenue-analytics-slice1/revenue-analytics-slice1.module';
import { RevenueAnalyticsSlice2Module } from './modules/analytics/revenue-analytics-slice2/revenue-analytics-slice2.module';
import { RevenueAnalyticsSlice3Module } from './modules/analytics/revenue-analytics-slice3/revenue-analytics-slice3.module';
import { RevenueAnalyticsSlice4Module } from './modules/analytics/revenue-analytics-slice4/revenue-analytics-slice4.module';
import { RevenueAnalyticsSlice5Module } from './modules/analytics/revenue-analytics-slice5/revenue-analytics-slice5.module';
import { LeakLossAnalyticsSlice1Module } from './modules/analytics/leak-loss-analytics-slice1/leak-loss-analytics-slice1.module';
import { LeakLossAnalyticsSlice2Module } from './modules/analytics/leak-loss-analytics-slice2/leak-loss-analytics-slice2.module';
import { LeakLossAnalyticsSlice3Module } from './modules/analytics/leak-loss-analytics-slice3/leak-loss-analytics-slice3.module';
import { LeakLossAnalyticsSlice4Module } from './modules/analytics/leak-loss-analytics-slice4/leak-loss-analytics-slice4.module';
import { LeakLossAnalyticsSlice5Module } from './modules/analytics/leak-loss-analytics-slice5/leak-loss-analytics-slice5.module';
import { PressureAnalyticsSlice1Module } from './modules/analytics/pressure-analytics-slice1/pressure-analytics-slice1.module';
import { PressureAnalyticsSlice2Module } from './modules/analytics/pressure-analytics-slice2/pressure-analytics-slice2.module';
import { PressureAnalyticsSlice3Module } from './modules/analytics/pressure-analytics-slice3/pressure-analytics-slice3.module';
import { PressureAnalyticsSlice4Module } from './modules/analytics/pressure-analytics-slice4/pressure-analytics-slice4.module';
import { PressureAnalyticsSlice5Module } from './modules/analytics/pressure-analytics-slice5/pressure-analytics-slice5.module';
import { QualityAnalyticsSlice1Module } from './modules/analytics/quality-analytics-slice1/quality-analytics-slice1.module';
import { QualityAnalyticsSlice2Module } from './modules/analytics/quality-analytics-slice2/quality-analytics-slice2.module';
import { QualityAnalyticsSlice3Module } from './modules/analytics/quality-analytics-slice3/quality-analytics-slice3.module';
import { QualityAnalyticsSlice4Module } from './modules/analytics/quality-analytics-slice4/quality-analytics-slice4.module';
import { QualityAnalyticsSlice5Module } from './modules/analytics/quality-analytics-slice5/quality-analytics-slice5.module';
import { OutageAnalyticsSlice1Module } from './modules/analytics/outage-analytics-slice1/outage-analytics-slice1.module';
import { OutageAnalyticsSlice2Module } from './modules/analytics/outage-analytics-slice2/outage-analytics-slice2.module';
import { OutageAnalyticsSlice3Module } from './modules/analytics/outage-analytics-slice3/outage-analytics-slice3.module';
import { OutageAnalyticsSlice4Module } from './modules/analytics/outage-analytics-slice4/outage-analytics-slice4.module';
import { OutageAnalyticsSlice5Module } from './modules/analytics/outage-analytics-slice5/outage-analytics-slice5.module';
import { ResponseTimeAnalyticsSlice1Module } from './modules/analytics/response-time-analytics-slice1/response-time-analytics-slice1.module';
import { ResponseTimeAnalyticsSlice2Module } from './modules/analytics/response-time-analytics-slice2/response-time-analytics-slice2.module';
import { ResponseTimeAnalyticsSlice3Module } from './modules/analytics/response-time-analytics-slice3/response-time-analytics-slice3.module';
import { ResponseTimeAnalyticsSlice4Module } from './modules/analytics/response-time-analytics-slice4/response-time-analytics-slice4.module';
import { ResponseTimeAnalyticsSlice5Module } from './modules/analytics/response-time-analytics-slice5/response-time-analytics-slice5.module';
import { CollectionRateAnalyticsSlice1Module } from './modules/analytics/collection-rate-analytics-slice1/collection-rate-analytics-slice1.module';
import { CollectionRateAnalyticsSlice2Module } from './modules/analytics/collection-rate-analytics-slice2/collection-rate-analytics-slice2.module';
import { CollectionRateAnalyticsSlice3Module } from './modules/analytics/collection-rate-analytics-slice3/collection-rate-analytics-slice3.module';
import { CollectionRateAnalyticsSlice4Module } from './modules/analytics/collection-rate-analytics-slice4/collection-rate-analytics-slice4.module';
import { CollectionRateAnalyticsSlice5Module } from './modules/analytics/collection-rate-analytics-slice5/collection-rate-analytics-slice5.module';
import { MeterHealthAnalyticsSlice1Module } from './modules/analytics/meter-health-analytics-slice1/meter-health-analytics-slice1.module';
import { MeterHealthAnalyticsSlice2Module } from './modules/analytics/meter-health-analytics-slice2/meter-health-analytics-slice2.module';
import { MeterHealthAnalyticsSlice3Module } from './modules/analytics/meter-health-analytics-slice3/meter-health-analytics-slice3.module';
import { MeterHealthAnalyticsSlice4Module } from './modules/analytics/meter-health-analytics-slice4/meter-health-analytics-slice4.module';
import { MeterHealthAnalyticsSlice5Module } from './modules/analytics/meter-health-analytics-slice5/meter-health-analytics-slice5.module';
import { NrwAnalyticsSlice1Module } from './modules/analytics/nrw-analytics-slice1/nrw-analytics-slice1.module';
import { NrwAnalyticsSlice2Module } from './modules/analytics/nrw-analytics-slice2/nrw-analytics-slice2.module';
import { NrwAnalyticsSlice3Module } from './modules/analytics/nrw-analytics-slice3/nrw-analytics-slice3.module';
import { NrwAnalyticsSlice4Module } from './modules/analytics/nrw-analytics-slice4/nrw-analytics-slice4.module';
import { NrwAnalyticsSlice5Module } from './modules/analytics/nrw-analytics-slice5/nrw-analytics-slice5.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/health/health.module';
import { UserAccountModule } from './modules/users/user-account.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT || 5432),
      username: process.env.DATABASE_USER || 'aquasense',
      password: process.env.DATABASE_PASSWORD || 'aquasense_dev',
      database: process.env.DATABASE_NAME || 'aquasense',
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    CommonModule,
    AuthModule,
    HealthModule,
    UserAccountModule,
    CentralDistrictModule,
    NorthDistrictModule,
    SouthDistrictModule,
    EastDistrictModule,
    WestDistrictModule,
    HarborDistrictModule,
    HighlandDistrictModule,
    ValleyDistrictModule,
    RiversideDistrictModule,
    LakesideDistrictModule,
    IndustrialDistrictModule,
    ResidentialDistrictModule,
    CommercialDistrictModule,
    SuburbanDistrictModule,
    DowntownDistrictModule,
    UptownDistrictModule,
    MidtownDistrictModule,
    CoastalDistrictModule,
    InlandDistrictModule,
    FrontierDistrictModule,
    ResidentialMeterBatch1Module,
    ResidentialMeterBatch2Module,
    ResidentialMeterBatch3Module,
    ResidentialMeterBatch4Module,
    CommercialMeterBatch1Module,
    CommercialMeterBatch2Module,
    CommercialMeterBatch3Module,
    CommercialMeterBatch4Module,
    IndustrialMeterBatch1Module,
    IndustrialMeterBatch2Module,
    IndustrialMeterBatch3Module,
    IndustrialMeterBatch4Module,
    AgriculturalMeterBatch1Module,
    AgriculturalMeterBatch2Module,
    AgriculturalMeterBatch3Module,
    AgriculturalMeterBatch4Module,
    MunicipalMeterBatch1Module,
    MunicipalMeterBatch2Module,
    MunicipalMeterBatch3Module,
    MunicipalMeterBatch4Module,
    FireServiceMeterBatch1Module,
    FireServiceMeterBatch2Module,
    FireServiceMeterBatch3Module,
    FireServiceMeterBatch4Module,
    IrrigationMeterBatch1Module,
    IrrigationMeterBatch2Module,
    IrrigationMeterBatch3Module,
    IrrigationMeterBatch4Module,
    BulkMeterBatch1Module,
    BulkMeterBatch2Module,
    BulkMeterBatch3Module,
    BulkMeterBatch4Module,
    MasterMeterBatch1Module,
    MasterMeterBatch2Module,
    MasterMeterBatch3Module,
    MasterMeterBatch4Module,
    SubmeterMeterBatch1Module,
    SubmeterMeterBatch2Module,
    SubmeterMeterBatch3Module,
    SubmeterMeterBatch4Module,
    LeakZone01Module,
    LeakZone02Module,
    LeakZone03Module,
    LeakZone04Module,
    LeakZone05Module,
    LeakZone06Module,
    LeakZone07Module,
    LeakZone08Module,
    LeakZone09Module,
    LeakZone10Module,
    LeakZone11Module,
    LeakZone12Module,
    LeakZone13Module,
    LeakZone14Module,
    LeakZone15Module,
    LeakZone16Module,
    LeakZone17Module,
    LeakZone18Module,
    LeakZone19Module,
    LeakZone20Module,
    LeakZone21Module,
    LeakZone22Module,
    LeakZone23Module,
    LeakZone24Module,
    LifelineBillingCycle1Module,
    LifelineBillingCycle2Module,
    LifelineBillingCycle3Module,
    LifelineBillingCycle4Module,
    LifelineBillingCycle5Module,
    StandardBillingCycle1Module,
    StandardBillingCycle2Module,
    StandardBillingCycle3Module,
    StandardBillingCycle4Module,
    StandardBillingCycle5Module,
    HighUseBillingCycle1Module,
    HighUseBillingCycle2Module,
    HighUseBillingCycle3Module,
    HighUseBillingCycle4Module,
    HighUseBillingCycle5Module,
    CommercialBillingCycle1Module,
    CommercialBillingCycle2Module,
    CommercialBillingCycle3Module,
    CommercialBillingCycle4Module,
    CommercialBillingCycle5Module,
    IndustrialBillingCycle1Module,
    IndustrialBillingCycle2Module,
    IndustrialBillingCycle3Module,
    IndustrialBillingCycle4Module,
    IndustrialBillingCycle5Module,
    AgriculturalBillingCycle1Module,
    AgriculturalBillingCycle2Module,
    AgriculturalBillingCycle3Module,
    AgriculturalBillingCycle4Module,
    AgriculturalBillingCycle5Module,
    PreventiveWorkOrder1Module,
    PreventiveWorkOrder2Module,
    PreventiveWorkOrder3Module,
    CorrectiveWorkOrder1Module,
    CorrectiveWorkOrder2Module,
    CorrectiveWorkOrder3Module,
    EmergencyWorkOrder1Module,
    EmergencyWorkOrder2Module,
    EmergencyWorkOrder3Module,
    InspectionWorkOrder1Module,
    InspectionWorkOrder2Module,
    InspectionWorkOrder3Module,
    CalibrationWorkOrder1Module,
    CalibrationWorkOrder2Module,
    CalibrationWorkOrder3Module,
    FlushingWorkOrder1Module,
    FlushingWorkOrder2Module,
    FlushingWorkOrder3Module,
    ValveExerciseWorkOrder1Module,
    ValveExerciseWorkOrder2Module,
    ValveExerciseWorkOrder3Module,
    HydrantTestWorkOrder1Module,
    HydrantTestWorkOrder2Module,
    HydrantTestWorkOrder3Module,
    PipeRepairWorkOrder1Module,
    PipeRepairWorkOrder2Module,
    PipeRepairWorkOrder3Module,
    PumpServiceWorkOrder1Module,
    PumpServiceWorkOrder2Module,
    PumpServiceWorkOrder3Module,
    NewConnectionRequest1Module,
    NewConnectionRequest2Module,
    DisconnectionRequest1Module,
    DisconnectionRequest2Module,
    MeterReplaceRequest1Module,
    MeterReplaceRequest2Module,
    PressureIssueRequest1Module,
    PressureIssueRequest2Module,
    WaterQualityRequest1Module,
    WaterQualityRequest2Module,
    BillingDisputeRequest1Module,
    BillingDisputeRequest2Module,
    LeakReportRequest1Module,
    LeakReportRequest2Module,
    NoWaterRequest1Module,
    NoWaterRequest2Module,
    LowPressureRequest1Module,
    LowPressureRequest2Module,
    HighBillRequest1Module,
    HighBillRequest2Module,
    MoveInRequest1Module,
    MoveInRequest2Module,
    MoveOutRequest1Module,
    MoveOutRequest2Module,
    AccountUpdateRequest1Module,
    AccountUpdateRequest2Module,
    PaymentPlanRequest1Module,
    PaymentPlanRequest2Module,
    InspectionRequest1Module,
    InspectionRequest2Module,
    PVCPipeSegment1Module,
    PVCPipeSegment2Module,
    PVCPipeSegment3Module,
    HDPEPipeSegment1Module,
    HDPEPipeSegment2Module,
    HDPEPipeSegment3Module,
    DuctileIronPipeSegment1Module,
    DuctileIronPipeSegment2Module,
    DuctileIronPipeSegment3Module,
    CastIronPipeSegment1Module,
    CastIronPipeSegment2Module,
    CastIronPipeSegment3Module,
    SteelPipeSegment1Module,
    SteelPipeSegment2Module,
    SteelPipeSegment3Module,
    ConcretePipeSegment1Module,
    ConcretePipeSegment2Module,
    ConcretePipeSegment3Module,
    CopperPipeSegment1Module,
    CopperPipeSegment2Module,
    CopperPipeSegment3Module,
    PEPipeSegment1Module,
    PEPipeSegment2Module,
    PEPipeSegment3Module,
    PumpStationAsset1Module,
    PumpStationAsset2Module,
    ReservoirAsset1Module,
    ReservoirAsset2Module,
    TreatmentPlantAsset1Module,
    TreatmentPlantAsset2Module,
    ValveAsset1Module,
    ValveAsset2Module,
    HydrantAsset1Module,
    HydrantAsset2Module,
    ManholeAsset1Module,
    ManholeAsset2Module,
    BoosterAsset1Module,
    BoosterAsset2Module,
    TankAsset1Module,
    TankAsset2Module,
    WellAsset1Module,
    WellAsset2Module,
    IntakeAsset1Module,
    IntakeAsset2Module,
    FilterAsset1Module,
    FilterAsset2Module,
    ChlorinatorAsset1Module,
    ChlorinatorAsset2Module,
    EmailNotificationTemplate1Module,
    EmailNotificationTemplate2Module,
    EmailNotificationTemplate3Module,
    EmailNotificationTemplate4Module,
    EmailNotificationTemplate5Module,
    EmailNotificationTemplate6Module,
    SmsNotificationTemplate1Module,
    SmsNotificationTemplate2Module,
    SmsNotificationTemplate3Module,
    SmsNotificationTemplate4Module,
    SmsNotificationTemplate5Module,
    SmsNotificationTemplate6Module,
    PushNotificationTemplate1Module,
    PushNotificationTemplate2Module,
    PushNotificationTemplate3Module,
    PushNotificationTemplate4Module,
    PushNotificationTemplate5Module,
    PushNotificationTemplate6Module,
    InAppNotificationTemplate1Module,
    InAppNotificationTemplate2Module,
    InAppNotificationTemplate3Module,
    InAppNotificationTemplate4Module,
    InAppNotificationTemplate5Module,
    InAppNotificationTemplate6Module,
    WebhookNotificationTemplate1Module,
    WebhookNotificationTemplate2Module,
    WebhookNotificationTemplate3Module,
    WebhookNotificationTemplate4Module,
    WebhookNotificationTemplate5Module,
    WebhookNotificationTemplate6Module,
    ConsumptionAnalyticsSlice1Module,
    ConsumptionAnalyticsSlice2Module,
    ConsumptionAnalyticsSlice3Module,
    ConsumptionAnalyticsSlice4Module,
    ConsumptionAnalyticsSlice5Module,
    RevenueAnalyticsSlice1Module,
    RevenueAnalyticsSlice2Module,
    RevenueAnalyticsSlice3Module,
    RevenueAnalyticsSlice4Module,
    RevenueAnalyticsSlice5Module,
    LeakLossAnalyticsSlice1Module,
    LeakLossAnalyticsSlice2Module,
    LeakLossAnalyticsSlice3Module,
    LeakLossAnalyticsSlice4Module,
    LeakLossAnalyticsSlice5Module,
    PressureAnalyticsSlice1Module,
    PressureAnalyticsSlice2Module,
    PressureAnalyticsSlice3Module,
    PressureAnalyticsSlice4Module,
    PressureAnalyticsSlice5Module,
    QualityAnalyticsSlice1Module,
    QualityAnalyticsSlice2Module,
    QualityAnalyticsSlice3Module,
    QualityAnalyticsSlice4Module,
    QualityAnalyticsSlice5Module,
    OutageAnalyticsSlice1Module,
    OutageAnalyticsSlice2Module,
    OutageAnalyticsSlice3Module,
    OutageAnalyticsSlice4Module,
    OutageAnalyticsSlice5Module,
    ResponseTimeAnalyticsSlice1Module,
    ResponseTimeAnalyticsSlice2Module,
    ResponseTimeAnalyticsSlice3Module,
    ResponseTimeAnalyticsSlice4Module,
    ResponseTimeAnalyticsSlice5Module,
    CollectionRateAnalyticsSlice1Module,
    CollectionRateAnalyticsSlice2Module,
    CollectionRateAnalyticsSlice3Module,
    CollectionRateAnalyticsSlice4Module,
    CollectionRateAnalyticsSlice5Module,
    MeterHealthAnalyticsSlice1Module,
    MeterHealthAnalyticsSlice2Module,
    MeterHealthAnalyticsSlice3Module,
    MeterHealthAnalyticsSlice4Module,
    MeterHealthAnalyticsSlice5Module,
    NrwAnalyticsSlice1Module,
    NrwAnalyticsSlice2Module,
    NrwAnalyticsSlice3Module,
    NrwAnalyticsSlice4Module,
    NrwAnalyticsSlice5Module,
  ],
})
export class AppModule {}
