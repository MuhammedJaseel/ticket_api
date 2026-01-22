import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import { TeamService } from 'src/services/team.services';

@Controller('api/team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get('profile')
  async getCompany(@Req() req: Request) {
    const loginAt = await this.teamService.findTeamLastLogin(req['reqId']);
    return { ...(await this.teamService.findById(req['reqId'])), loginAt };
  }
}
