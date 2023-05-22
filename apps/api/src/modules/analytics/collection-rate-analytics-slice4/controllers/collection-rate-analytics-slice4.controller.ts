/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Controller: CollectionRateAnalyticsSlice4
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
import { CollectionRateAnalyticsSlice4Service } from '../services/collection-rate-analytics-slice4.service';
import { CreateCollectionRateAnalyticsSlice4Dto, UpdateCollectionRateAnalyticsSlice4Dto, CollectionRateAnalyticsSlice4QueryDto } from '../dto/collection-rate-analytics-slice4.dto';
import { JwtAuthGuard, RolesGuard, Roles, CurrentUser, Role } from '@aquasense/common';

@ApiTags('CollectionRateAnalyticsSlice4')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('collection-rate-analytics-slice4')
export class CollectionRateAnalyticsSlice4Controller {
  constructor(private readonly service: CollectionRateAnalyticsSlice4Service) {}

  @Post()
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Create CollectionRateAnalyticsSlice4' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateCollectionRateAnalyticsSlice4Dto, @CurrentUser() user: { id: string }) {
    return this.service.create(dto, user.id);
  }

  @Get()
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'List CollectionRateAnalyticsSlice4 records' })
  findAll(@Query() query: CollectionRateAnalyticsSlice4QueryDto) {
    return this.service.findAll(query);
  }

  @Get('export/csv')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @Header('Content-Type', 'text/csv')
  @ApiOperation({ summary: 'Export CollectionRateAnalyticsSlice4 as CSV' })
  async exportCsv(@Query() query: CollectionRateAnalyticsSlice4QueryDto, @Res() res: Response) {
    const csv = await this.service.exportCsv(query);
    res.setHeader('Content-Disposition', 'attachment; filename="collection-rate-analytics-slice4-export.csv"');
    res.send(csv);
  }

  @Get('summary')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @ApiOperation({ summary: 'Summary metrics for CollectionRateAnalyticsSlice4' })
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
  @ApiOperation({ summary: 'Get CollectionRateAnalyticsSlice4 by id' })
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Update CollectionRateAnalyticsSlice4' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCollectionRateAnalyticsSlice4Dto,
    @CurrentUser() user: { id: string },
  ) {
    return this.service.update(id, dto, user.id);
  }

  @Post('bulk')
  @Roles(Role.Admin, Role.Operator)
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() items: CreateCollectionRateAnalyticsSlice4Dto[], @CurrentUser() user: { id: string }) {
    return this.service.bulkCreate(items, user.id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete CollectionRateAnalyticsSlice4' })
  remove(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.service.remove(id, user.id);
  }
}
