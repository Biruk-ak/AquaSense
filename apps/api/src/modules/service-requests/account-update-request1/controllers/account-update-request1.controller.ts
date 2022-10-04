/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Controller: AccountUpdateRequest1
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
import { AccountUpdateRequest1Service } from '../services/account-update-request1.service';
import { CreateAccountUpdateRequest1Dto, UpdateAccountUpdateRequest1Dto, AccountUpdateRequest1QueryDto } from '../dto/account-update-request1.dto';
import { JwtAuthGuard, RolesGuard, Roles, CurrentUser, Role } from '@aquasense/common';

@ApiTags('AccountUpdateRequest1')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('account-update-request1')
export class AccountUpdateRequest1Controller {
  constructor(private readonly service: AccountUpdateRequest1Service) {}

  @Post()
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Create AccountUpdateRequest1' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  create(@Body() dto: CreateAccountUpdateRequest1Dto, @CurrentUser() user: { id: string }) {
    return this.service.create(dto, user.id);
  }

  @Get()
  @Roles(Role.Admin, Role.Operator, Role.Consumer, Role.Analyst)
  @ApiOperation({ summary: 'List AccountUpdateRequest1 records' })
  findAll(@Query() query: AccountUpdateRequest1QueryDto) {
    return this.service.findAll(query);
  }

  @Get('export/csv')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @Header('Content-Type', 'text/csv')
  @ApiOperation({ summary: 'Export AccountUpdateRequest1 as CSV' })
  async exportCsv(@Query() query: AccountUpdateRequest1QueryDto, @Res() res: Response) {
    const csv = await this.service.exportCsv(query);
    res.setHeader('Content-Disposition', 'attachment; filename="account-update-request1-export.csv"');
    res.send(csv);
  }

  @Get('summary')
  @Roles(Role.Admin, Role.Operator, Role.Analyst)
  @ApiOperation({ summary: 'Summary metrics for AccountUpdateRequest1' })
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
  @ApiOperation({ summary: 'Get AccountUpdateRequest1 by id' })
  findOne(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Operator)
  @ApiOperation({ summary: 'Update AccountUpdateRequest1' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateAccountUpdateRequest1Dto,
    @CurrentUser() user: { id: string },
  ) {
    return this.service.update(id, dto, user.id);
  }

  @Post('bulk')
  @Roles(Role.Admin, Role.Operator)
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() items: CreateAccountUpdateRequest1Dto[], @CurrentUser() user: { id: string }) {
    return this.service.bulkCreate(items, user.id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete AccountUpdateRequest1' })
  remove(@Param('id') id: string, @CurrentUser() user: { id: string }) {
    return this.service.remove(id, user.id);
  }
}
