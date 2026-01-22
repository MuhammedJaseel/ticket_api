import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Types } from 'mongoose';
import { CompanyService } from 'src/services/company.services';
import {
  LoginByEventDto,
  LoginCompanyDto,
  LoginTeamDto,
  VerifyCompanyDto,
  VerifyTeamDto,
} from 'src/types/auth.dto';

@Controller('api/auth')
export class AuthController {
  constructor(
    private jwt: JwtService,
    private companyService: CompanyService,
  ) {}

  COMPANY_SECRET = 'companysecret';

  @Post('company/login')
  companyLogin(@Body() body: LoginCompanyDto) {
    const otp = '123456';
    const secret = 'companysecret' + otp;
    const token = this.jwt.sign({ email: body.email }, { secret });
    // TODO: Need to add expiry time
    return { token };
  }

  @Post('company/verify')
  async companyVerify(@Body() body: VerifyCompanyDto) {
    const secret = 'companysecret' + body.otp;
    let decoded: any = {};
    try {
      decoded = this.jwt.verify(body.token, { secret });
    } catch (error) {
      throw new UnauthorizedException('Invalid OTP');
    }

    let data = await this.companyService.findByEmail(decoded.email);
    if (!data) data = this.companyService.createBasic({ email: decoded.email });

    const token = this.jwt.sign(
      { id: data._id, type: 'COMPANY_T1' },
      { secret: 'companysecret' },
    );
    // TODO: Need to add expiry time
    return { token, registerd: data.registerd };
  }

  @Post('team/login')
  teamLogin(@Body() body: LoginTeamDto) {
    const otp = '1234';
    const secret = 'companysecret' + otp;
    const token = this.jwt.sign(
      { email: body.email, teamId: body.teamId },
      { secret },
    );
    // TODO: Need to add expiry time
    return { token };
  }

  @Post('team/verify')
  async teamVerify(@Body() body: VerifyTeamDto) {
    const secret = 'companysecret' + body.otp;
    let decoded: any = {};
    try {
      decoded = this.jwt.verify(body.token, { secret });
    } catch (error) {
      throw new UnauthorizedException('Invalid OTP');
    }

    if (decoded.teamId) {
      return this.companyService.markTeamLogin(decoded.teamId);
    } else {
      const events = await this.companyService.findTeamAllEvents(decoded.email);
      const secret = 'companysecret';
      const token = this.jwt.sign({ email: decoded.email }, { secret });
      // TODO: Need to add expiry time
      return { events, token };
    }
  }

  @Post('team/login-by-event')
  async teamLoginByEvent(@Body() body: LoginByEventDto) {
    const secret = 'companysecret';
    let decoded: any = {};
    try {
      decoded = this.jwt.verify(body.token, { secret });
    } catch (error) {
      throw new UnauthorizedException('Invalid Token');
    }

    const event = new Types.ObjectId(body.eventId);
    const email = decoded.email;
    const team = await this.companyService.getTeam({ event, email });
    return this.companyService.markTeamLogin(team._id);
  }
}
