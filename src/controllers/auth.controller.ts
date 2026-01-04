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
}
