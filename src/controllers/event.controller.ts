import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Types } from 'mongoose';
import { EventService } from 'src/services/event.services';
import { TeamService } from 'src/services/team.services';
import { UserService } from 'src/services/user.services';
import { CreateEventDto, UpdateEventDto } from 'src/types/event.dto';
import { CreateTeamDto, UpdateTeamDto } from 'src/types/team.dto';
import { CreateUserDto, UpdateUserDto } from 'src/types/user.dto';

@Controller('api/company/event')
export class EventController {
  constructor(
    private eventService: EventService,
    private teamService: TeamService,
    private userService: UserService,
  ) {}

  @Get(':eventId/team/:teamId')
  getTeam(
    @Req() req: Request,
    @Param('eventId') eventId: string,
    @Param('teamId') teamId: string,
  ) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    const _teamId = new Types.ObjectId(teamId);
    return this.teamService.findOneById(_companyId, _eventId, _teamId);
  }

  @Get(':eventId/team')
  getTeams(@Req() req: Request, @Param('eventId') eventId: string) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    return this.teamService.findAllById(_companyId, _eventId);
  }

  @Post(':eventId/team')
  addTeam(
    @Req() req: Request,
    @Body() body: CreateTeamDto,
    @Param('eventId') eventId: string,
  ) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    return this.teamService.create(_companyId, _eventId, body);
  }

  @Put(':eventId/team/:teamId')
  updateTeam(
    @Req() req: Request,
    @Param('eventId') eventId: string,
    @Param('teamId') teamId: string,
    @Body() body: UpdateTeamDto,
  ) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    const _teamId = new Types.ObjectId(teamId);
    return this.teamService.update(_companyId, _eventId, _teamId, body);
  }

  @Delete(':eventId/team/:teamId')
  deleteTeam(
    @Req() req: Request,
    @Param('eventId') eventId: string,
    @Param('teamId') teamId: string,
  ) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    const _teamId = new Types.ObjectId(teamId);
    return this.teamService.update(_companyId, _eventId, _teamId, {
      deleted: true,
    });
  }

  // ----------------------------------------------------------------------------

  @Get(':eventId/user/:userId')
  getUser(
    @Req() req: Request,
    @Param('eventId') eventId: string,
    @Param('userId') userId: string,
  ) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    const _userId = new Types.ObjectId(userId);
    return this.userService.findOneById(_companyId, _eventId, _userId);
  }

  @Get(':eventId/user')
  getUsers(@Req() req: Request, @Param('eventId') eventId: string) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    return this.userService.findAllById(_companyId, _eventId);
  }

  @Post(':eventId/user')
  addUser(
    @Req() req: Request,
    @Param('eventId') eventId: string,
    @Body() body: CreateUserDto,
  ) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    return this.userService.create(_companyId, _eventId, body);
  }

  @Put(':eventId/user/:userId')
  updateUser(
    @Req() req: Request,
    @Param('eventId') eventId: string,
    @Param('userId') userId: string,
    @Body() body: UpdateUserDto,
  ) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    const _userId = new Types.ObjectId(userId);
    return this.userService.update(_companyId, _eventId, _userId, body);
  }

  @Delete(':eventId/user/:userId')
  deleteUser(
    @Req() req: Request,
    @Param('eventId') eventId: string,
    @Param('userId') userId: string,
  ) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    const _userId = new Types.ObjectId(userId);
    return this.userService.update(_companyId, _eventId, _userId, {
      deleted: true,
    });
  }

  // ----------------------------------------------------------------------------

  @Get(':eventId')
  getEvent(@Req() req: Request, @Param('eventId') eventId: string) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    return this.eventService.findOneById(_companyId, _eventId);
  }

  @Get()
  getEvents(@Req() req: Request) {
    const _companyId = new Types.ObjectId(req['reqId']);
    console.log(_companyId);
    return this.eventService.findAllById(_companyId);
  }

  @Post()
  addEvent(@Req() req: Request, @Body() body: CreateEventDto) {
    const _companyId = new Types.ObjectId(req['reqId']);
    return this.eventService.create(_companyId, body);
  }

  @Put(':eventId')
  updateEvent(
    @Req() req: Request,
    @Param('eventId') eventId: string,
    @Body() body: UpdateEventDto,
  ) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    return this.eventService.update(_companyId, _eventId, body);
  }

  @Delete(':eventId')
  deleteEvent(@Req() req: Request, @Param('eventId') eventId: string) {
    const _companyId = new Types.ObjectId(req['reqId']);
    const _eventId = new Types.ObjectId(eventId);
    return this.eventService.update(_companyId, _eventId, { deleted: true });
  }
}
