import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { Types } from 'mongoose';
import { EventService } from 'src/services/event.services';
import { CreateEventDto } from 'src/types/event.dto';

@Controller('api/event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get(':id')
  getEvent(@Req() req: Request, @Param('id') id: string) {
    const _id = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(id);
    return this.eventService.findOneById(_id, _eventId);
  }

  @Get()
  getEvents(@Req() req: Request) {
    const _id = new Types.ObjectId(req['reqId']);
    return this.eventService.findAllById(_id);
  }

  @Post()
  addEvent(@Req() req: Request, @Body() body: CreateEventDto) {
    const _id = new Types.ObjectId(req['reqId']);
    return this.eventService.create(_id, body);
  }

  @Put(':id')
  updateEvent(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() body: CreateEventDto,
  ) {
    const _id = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(id);
    return this.eventService.update(_id, _eventId, body);
  }
}
