// create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}

export class LoginCompanyDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;
}

export class VerifyCompanyDto {
  @IsNotEmpty({ message: 'Token is required' })
  @IsString()
  token: string;

  @IsNotEmpty({ message: 'OTP is required' })
  @IsString()
  otp: string;
}
