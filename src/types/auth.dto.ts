import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginCompanyDto {
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail()
  email: string;
}

export class LoginTeamDto {
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail()
  @IsOptional()
  email: string;

  @IsNotEmpty({ message: 'teamId is required' })
  @IsString()
  @IsOptional()
  @IsMongoId({ message: 'teamId must be a valid MongoDB id' })
  teamId: string;
}

export class VerifyCompanyDto {
  @IsNotEmpty({ message: 'Token is required' })
  @IsString()
  token: string;

  @MinLength(4, { message: 'OTP must be 4 characters' })
  @MaxLength(4, { message: 'OTP must be 4 characters' })
  @IsNotEmpty({ message: 'OTP is required' })
  @IsString()
  otp: string;
}

export class LoginByEventDto {
  @IsNotEmpty({ message: 'Token is required' })
  @IsString()
  token: string;

  @IsNotEmpty({ message: 'teamId is required' })
  @IsString()
  @IsOptional()
  @IsMongoId({ message: 'teamId must be a valid MongoDB id' })
  eventId: string;
}
