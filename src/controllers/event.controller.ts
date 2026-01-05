import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Types } from 'mongoose';
import { CompanyService } from 'src/services/company.services';
import { RegisterCompanyDto } from 'src/types/company.dto';

@Controller('api/event')
export class EventController {
  constructor(private companyService: CompanyService) {}

  @Get()
  getCompany(@Req() req: Request, @Body() body: RegisterCompanyDto) {
    const _id = new Types.ObjectId(req['reqId']);
    return this.companyService.findById(_id);
  }

  @Post('register')
  companyLogin(@Req() req: Request, @Body() body: RegisterCompanyDto) {
    const _id = new Types.ObjectId(req['reqId']);
    return this.companyService.register(_id, body);
  }
}
