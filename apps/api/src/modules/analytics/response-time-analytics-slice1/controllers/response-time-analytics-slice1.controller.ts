/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Controller: ResponseTimeAnalyticsSlice1
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
import { ResponseTimeAnalyticsSlice1Service } from '../services/response-time-analytics-slice1.service';
import { CreateResponseTimeAnalyticsSlice1Dto, UpdateResponseTimeAnalyticsSlice1Dto, ResponseTimeAnalyticsSlice1QueryDto } from '../dto/response-time-analytics-slice1.dto';
import { JwtAuthGuard, RolesGuard, Roles, CurrentUser, Role } from '@aquasense/common';

@ApiTags('ResponseTimeAnalyticsSlice1')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('response-time-analytics-slice1')
export class ResponseTimeAnalyticsSlice1Controller {
  constructor(private readonly service: ResponseTimeAnalyticsSlice1Service) {}

  @Post()
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Create ResponseTimeAnalyticsSlice1' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateResponseTimeAnalyticsSlice1Dto, @CurrentUser() user: { id: string }) {
    return this.service.create(dto, user.id);
  }

  @Get()
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'List ResponseTimeAnalyticsSlice1 records' })
  findAll(@Query() query: ResponseTimeAnalyticsSlice1QueryDto) {
    return this.service.findAll(query);
  }

  @Get('export/csv')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @Header('Content-Type', 'text/csv')
  @ApiOperation({ summary: 'Export ResponseTimeAnalyticsSlice1 as CSV' })
  async exportCsv(@Query() query: ResponseTimeAnalyticsSlice1QueryDto, @Res() res: Response) {
    const csv = await this.service.exportCsv(query);
    res.setHeader('Content-Disposition', 'attachment; filename="response-time-analytics-slice1-export.csv"');
    res.send(csv);
  }

  @Get('summary')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @ApiOperation({ summary: 'Summary metrics for ResponseTimeAnalyticsSlice1' })
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
  @ApiOperation({ summary: 'Get ResponseTimeAnalyticsSlice1 by id' })
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Update ResponseTimeAnalyticsSlice1' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateResponseTimeAnalyticsSlice1Dto,
    @CurrentUser() user: { id: string },
  ) {
    return this.service.update(id, dto, user.id);
  }

  @Post('bulk')
  @Roles(Role.Admin, Role.Operator)
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() items: CreateResponseTimeAnalyticsSlice1Dto[], @CurrentUser() user: { id: string }) {
    return this.service.bulkCreate(items, user.id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete ResponseTimeAnalyticsSlice1' })
  remove(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.service.remove(id, user.id);
  }
}
