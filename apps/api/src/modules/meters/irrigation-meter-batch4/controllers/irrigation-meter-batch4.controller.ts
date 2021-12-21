/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Controller: IrrigationMeterBatch4
 * @copyright Biruk-ak
 */

import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
  Header,
  Res,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { IrrigationMeterBatch4Service } from '../services/irrigation-meter-batch4.service';
import { CreateIrrigationMeterBatch4Dto, UpdateIrrigationMeterBatch4Dto, IrrigationMeterBatch4QueryDto } from '../dto/irrigation-meter-batch4.dto';
import { JwtAuthGuard, RolesGuard, Roles, CurrentUser, Role } from '@aquasense/common';

@ApiTags('IrrigationMeterBatch4')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('irrigation-meter-batch4')
export class IrrigationMeterBatch4Controller {
  constructor(private readonly service: IrrigationMeterBatch4Service) {}

  @Post()
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Create IrrigationMeterBatch4' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateIrrigationMeterBatch4Dto, @CurrentUser() user: { id: string }) {
    return this.service.create(dto, user.id);
  }

  @Get()
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'List IrrigationMeterBatch4 records' })
  findAll(@Query() query: IrrigationMeterBatch4QueryDto) {
    return this.service.findAll(query);
  }

  @Get('export/csv')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @Header('Content-Type', 'text/csv')
  @ApiOperation({ summary: 'Export IrrigationMeterBatch4 as CSV' })
  async exportCsv(@Query() query: IrrigationMeterBatch4QueryDto, @Res() res: Response) {
    const csv = await this.service.exportCsv(query);
    res.setHeader('Content-Disposition', 'attachment; filename="irrigation-meter-batch4-export.csv"');
    res.send(csv);
  }

  @Get('summary')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @ApiOperation({ summary: 'Summary metrics for IrrigationMeterBatch4' })
  summary(@Query('from') from: string, @Query('to') to: string) {
    return this.service.computeSummary(new Date(from), new Date(to));
  }

  @Get('search')
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  search(@Query('q') q: string) {
    return this.service.searchByText(q);
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'Get IrrigationMeterBatch4 by id' })
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Update IrrigationMeterBatch4' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateIrrigationMeterBatch4Dto,
    @CurrentUser() user: { id: string },
  ) {
    return this.service.update(id, dto, user.id);
  }

  @Post('bulk')
  @Roles(Role.Admin, Role.Operator)
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() items: CreateIrrigationMeterBatch4Dto[], @CurrentUser() user: { id: string }) {
    return this.service.bulkCreate(items, user.id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete IrrigationMeterBatch4' })
  remove(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.service.remove(id, user.id);
  }
}
