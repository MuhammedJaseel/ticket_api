import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginCompanyDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;
}

export class VerifyCompanyDto {
  @IsNotEmpty({ message: 'Token is required' })
  @IsString()
  token: string;

  @MinLength(6, { message: 'OTP must be 6 characters' })
  @MaxLength(6, { message: 'OTP must be 6 characters' })
  @IsNotEmpty({ message: 'OTP is required' })
  @IsString()
  otp: string;
}
