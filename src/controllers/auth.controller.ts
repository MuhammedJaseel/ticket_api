import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CompanyService } from 'src/services/company.services';
import { LoginCompanyDto, VerifyCompanyDto } from 'src/types/auth.dto';

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
    return { token };
  }

  @Post('company/verify')
  async companyVerify(@Body() body: VerifyCompanyDto) {
    const secret = 'companysecret' + body.otp;
    let decoded: any = {};
    try {
      decoded = this.jwt.verify(body.token, { secret });
    } catch (error) {
      throw new UnauthorizedException('Invalid token or OTP');
    }

    let data = await this.companyService.findByEmail(decoded.email);
    if (!data) data = this.companyService.createBasic({ email: decoded.email });

    const token = this.jwt.sign({ id: data._id }, { secret: 'companysecret' });

    return { token, registerd: data.registerd };
  }
}
