/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Controller: MeterHealthAnalyticsSlice2
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
import { MeterHealthAnalyticsSlice2Service } from '../services/meter-health-analytics-slice2.service';
import { CreateMeterHealthAnalyticsSlice2Dto, UpdateMeterHealthAnalyticsSlice2Dto, MeterHealthAnalyticsSlice2QueryDto } from '../dto/meter-health-analytics-slice2.dto';
import { JwtAuthGuard, RolesGuard, Roles, CurrentUser, Role } from '@aquasense/common';

@ApiTags('MeterHealthAnalyticsSlice2')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('meter-health-analytics-slice2')
export class MeterHealthAnalyticsSlice2Controller {
  constructor(private readonly service: MeterHealthAnalyticsSlice2Service) {}

  @Post()
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Create MeterHealthAnalyticsSlice2' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateMeterHealthAnalyticsSlice2Dto, @CurrentUser() user: { id: string }) {
    return this.service.create(dto, user.id);
  }

  @Get()
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'List MeterHealthAnalyticsSlice2 records' })
  findAll(@Query() query: MeterHealthAnalyticsSlice2QueryDto) {
    return this.service.findAll(query);
  }

  @Get('export/csv')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @Header('Content-Type', 'text/csv')
  @ApiOperation({ summary: 'Export MeterHealthAnalyticsSlice2 as CSV' })
  async exportCsv(@Query() query: MeterHealthAnalyticsSlice2QueryDto, @Res() res: Response) {
    const csv = await this.service.exportCsv(query);
    res.setHeader('Content-Disposition', 'attachment; filename="meter-health-analytics-slice2-export.csv"');
    res.send(csv);
  }

  @Get('summary')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @ApiOperation({ summary: 'Summary metrics for MeterHealthAnalyticsSlice2' })
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
  @ApiOperation({ summary: 'Get MeterHealthAnalyticsSlice2 by id' })
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Update MeterHealthAnalyticsSlice2' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMeterHealthAnalyticsSlice2Dto,
    @CurrentUser() user: { id: string },
  ) {
    return this.service.update(id, dto, user.id);
  }

  @Post('bulk')
  @Roles(Role.Admin, Role.Operator)
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() items: CreateMeterHealthAnalyticsSlice2Dto[], @CurrentUser() user: { id: string }) {
    return this.service.bulkCreate(items, user.id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete MeterHealthAnalyticsSlice2' })
  remove(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.service.remove(id, user.id);
  }
}
