/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Controller: ConsumptionAnalyticsSlice5
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
import { ConsumptionAnalyticsSlice5Service } from '../services/consumption-analytics-slice5.service';
import { CreateConsumptionAnalyticsSlice5Dto, UpdateConsumptionAnalyticsSlice5Dto, ConsumptionAnalyticsSlice5QueryDto } from '../dto/consumption-analytics-slice5.dto';
import { JwtAuthGuard, RolesGuard, Roles, CurrentUser, Role } from '@aquasense/common';

@ApiTags('ConsumptionAnalyticsSlice5')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('consumption-analytics-slice5')
export class ConsumptionAnalyticsSlice5Controller {
  constructor(private readonly service: ConsumptionAnalyticsSlice5Service) {}

  @Post()
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Create ConsumptionAnalyticsSlice5' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateConsumptionAnalyticsSlice5Dto, @CurrentUser() user: { id: string }) {
    return this.service.create(dto, user.id);
  }

  @Get()
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'List ConsumptionAnalyticsSlice5 records' })
  findAll(@Query() query: ConsumptionAnalyticsSlice5QueryDto) {
    return this.service.findAll(query);
  }

  @Get('export/csv')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @Header('Content-Type', 'text/csv')
  @ApiOperation({ summary: 'Export ConsumptionAnalyticsSlice5 as CSV' })
  async exportCsv(@Query() query: ConsumptionAnalyticsSlice5QueryDto, @Res() res: Response) {
    const csv = await this.service.exportCsv(query);
    res.setHeader('Content-Disposition', 'attachment; filename="consumption-analytics-slice5-export.csv"');
    res.send(csv);
  }

  @Get('summary')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @ApiOperation({ summary: 'Summary metrics for ConsumptionAnalyticsSlice5' })
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
  @ApiOperation({ summary: 'Get ConsumptionAnalyticsSlice5 by id' })
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Update ConsumptionAnalyticsSlice5' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateConsumptionAnalyticsSlice5Dto,
    @CurrentUser() user: { id: string },
  ) {
    return this.service.update(id, dto, user.id);
  }

  @Post('bulk')
  @Roles(Role.Admin, Role.Operator)
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() items: CreateConsumptionAnalyticsSlice5Dto[], @CurrentUser() user: { id: string }) {
    return this.service.bulkCreate(items, user.id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete ConsumptionAnalyticsSlice5' })
  remove(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.service.remove(id, user.id);
  }
}
