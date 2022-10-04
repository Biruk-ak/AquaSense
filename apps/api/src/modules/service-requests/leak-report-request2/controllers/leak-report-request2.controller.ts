/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Controller: LeakReportRequest2
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
import { LeakReportRequest2Service } from '../services/leak-report-request2.service';
import { CreateLeakReportRequest2Dto, UpdateLeakReportRequest2Dto, LeakReportRequest2QueryDto } from '../dto/leak-report-request2.dto';
import { JwtAuthGuard, RolesGuard, Roles, CurrentUser, Role } from '@aquasense/common';

@ApiTags('LeakReportRequest2')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('leak-report-request2')
export class LeakReportRequest2Controller {
  constructor(private readonly service: LeakReportRequest2Service) {}

  @Post()
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Create LeakReportRequest2' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateLeakReportRequest2Dto, @CurrentUser() user: { id: string }) {
    return this.service.create(dto, user.id);
  }

  @Get()
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'List LeakReportRequest2 records' })
  findAll(@Query() query: LeakReportRequest2QueryDto) {
    return this.service.findAll(query);
  }

  @Get('export/csv')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @Header('Content-Type', 'text/csv')
  @ApiOperation({ summary: 'Export LeakReportRequest2 as CSV' })
  async exportCsv(@Query() query: LeakReportRequest2QueryDto, @Res() res: Response) {
    const csv = await this.service.exportCsv(query);
    res.setHeader('Content-Disposition', 'attachment; filename="leak-report-request2-export.csv"');
    res.send(csv);
  }

  @Get('summary')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @ApiOperation({ summary: 'Summary metrics for LeakReportRequest2' })
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
  @ApiOperation({ summary: 'Get LeakReportRequest2 by id' })
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Update LeakReportRequest2' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateLeakReportRequest2Dto,
    @CurrentUser() user: { id: string },
  ) {
    return this.service.update(id, dto, user.id);
  }

  @Post('bulk')
  @Roles(Role.Admin, Role.Operator)
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() items: CreateLeakReportRequest2Dto[], @CurrentUser() user: { id: string }) {
    return this.service.bulkCreate(items, user.id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete LeakReportRequest2' })
  remove(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.service.remove(id, user.id);
  }
}
