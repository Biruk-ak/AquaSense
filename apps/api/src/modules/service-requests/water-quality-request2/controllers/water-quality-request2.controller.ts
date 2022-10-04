/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Controller: WaterQualityRequest2
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
import { WaterQualityRequest2Service } from '../services/water-quality-request2.service';
import { CreateWaterQualityRequest2Dto, UpdateWaterQualityRequest2Dto, WaterQualityRequest2QueryDto } from '../dto/water-quality-request2.dto';
import { JwtAuthGuard, RolesGuard, Roles, CurrentUser, Role } from '@aquasense/common';

@ApiTags('WaterQualityRequest2')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('water-quality-request2')
export class WaterQualityRequest2Controller {
  constructor(private readonly service: WaterQualityRequest2Service) {}

  @Post()
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Create WaterQualityRequest2' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateWaterQualityRequest2Dto, @CurrentUser() user: { id: string }) {
    return this.service.create(dto, user.id);
  }

  @Get()
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'List WaterQualityRequest2 records' })
  findAll(@Query() query: WaterQualityRequest2QueryDto) {
    return this.service.findAll(query);
  }

  @Get('export/csv')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @Header('Content-Type', 'text/csv')
  @ApiOperation({ summary: 'Export WaterQualityRequest2 as CSV' })
  async exportCsv(@Query() query: WaterQualityRequest2QueryDto, @Res() res: Response) {
    const csv = await this.service.exportCsv(query);
    res.setHeader('Content-Disposition', 'attachment; filename="water-quality-request2-export.csv"');
    res.send(csv);
  }

  @Get('summary')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @ApiOperation({ summary: 'Summary metrics for WaterQualityRequest2' })
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
  @ApiOperation({ summary: 'Get WaterQualityRequest2 by id' })
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Update WaterQualityRequest2' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateWaterQualityRequest2Dto,
    @CurrentUser() user: { id: string },
  ) {
    return this.service.update(id, dto, user.id);
  }

  @Post('bulk')
  @Roles(Role.Admin, Role.Operator)
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() items: CreateWaterQualityRequest2Dto[], @CurrentUser() user: { id: string }) {
    return this.service.bulkCreate(items, user.id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete WaterQualityRequest2' })
  remove(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.service.remove(id, user.id);
  }
}
