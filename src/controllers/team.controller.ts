import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import { TeamService } from 'src/services/team.services';

@Controller('api/team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get('profile')
  getCompany(@Req() req: Request) {
    return this.teamService.findById(req['reqId']);
  }
}
