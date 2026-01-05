import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Types } from 'mongoose';
import { EventService } from 'src/services/event.services';
import { CreateEventDto } from 'src/types/event.dto';

@Controller('api/event')
export class EventController {
  constructor(private eventService: EventService) {}

  //   @Get()
  //   getCompany(@Req() req: Request) {
  //     const _id = new Types.ObjectId(req['reqId']);
  //     return this.eventService.findById(_id);
  //   }

  @Post()
  addEvent(@Req() req: Request, @Body() body: CreateEventDto) {
    const _id = new Types.ObjectId(req['reqId']);
    return this.eventService.create(_id, body);
  }
}
