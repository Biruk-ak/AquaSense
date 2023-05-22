/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Controller: CollectionRateAnalyticsSlice3
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
import { CollectionRateAnalyticsSlice3Service } from '../services/collection-rate-analytics-slice3.service';
import { CreateCollectionRateAnalyticsSlice3Dto, UpdateCollectionRateAnalyticsSlice3Dto, CollectionRateAnalyticsSlice3QueryDto } from '../dto/collection-rate-analytics-slice3.dto';
import { JwtAuthGuard, RolesGuard, Roles, CurrentUser, Role } from '@aquasense/common';

@ApiTags('CollectionRateAnalyticsSlice3')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('collection-rate-analytics-slice3')
export class CollectionRateAnalyticsSlice3Controller {
  constructor(private readonly service: CollectionRateAnalyticsSlice3Service) {}

  @Post()
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Create CollectionRateAnalyticsSlice3' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateCollectionRateAnalyticsSlice3Dto, @CurrentUser() user: { id: string }) {
    return this.service.create(dto, user.id);
  }

  @Get()
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'List CollectionRateAnalyticsSlice3 records' })
  findAll(@Query() query: CollectionRateAnalyticsSlice3QueryDto) {
    return this.service.findAll(query);
  }

  @Get('export/csv')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @Header('Content-Type', 'text/csv')
  @ApiOperation({ summary: 'Export CollectionRateAnalyticsSlice3 as CSV' })
  async exportCsv(@Query() query: CollectionRateAnalyticsSlice3QueryDto, @Res() res: Response) {
    const csv = await this.service.exportCsv(query);
    res.setHeader('Content-Disposition', 'attachment; filename="collection-rate-analytics-slice3-export.csv"');
    res.send(csv);
  }

  @Get('summary')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @ApiOperation({ summary: 'Summary metrics for CollectionRateAnalyticsSlice3' })
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
  @ApiOperation({ summary: 'Get CollectionRateAnalyticsSlice3 by id' })
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Update CollectionRateAnalyticsSlice3' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCollectionRateAnalyticsSlice3Dto,
    @CurrentUser() user: { id: string },
  ) {
    return this.service.update(id, dto, user.id);
  }

  @Post('bulk')
  @Roles(Role.Admin, Role.Operator)
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() items: CreateCollectionRateAnalyticsSlice3Dto[], @CurrentUser() user: { id: string }) {
    return this.service.bulkCreate(items, user.id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete CollectionRateAnalyticsSlice3' })
  remove(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.service.remove(id, user.id);
  }
}
