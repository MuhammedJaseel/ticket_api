import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('api/auth')
export class AuthController {
  constructor(private jwt: JwtService) {}

  @Post('company/login')
  companyLogin(@Body() body: { email: string }) {
    const token = this.jwt.sign(
      { email: body.email },
      { secret: 'companysecret' },
    );
    return { token };
  }

  @Post('company/verify')
  companyVerify(@Body() body: { token: string; otp: string }) {
    if (body.otp !== '123456') throw new Error('Invalid OTP');

    const decoded = this.jwt.verify(body.token, { secret: 'companysecret' });

    const token = this.jwt.sign(
      { email: decoded.email },
      { secret: 'companysecret' },
    );

    return { token };
  }
}
