import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  phone: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  country: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  city: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  org: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  role: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  ticketType: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  dietary: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  accessibility: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  emergencyName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  emergencyPhone: string;

  @IsNotEmpty()
  @IsBoolean()
  marketingOptIn: boolean;

  @IsNotEmpty()
  @IsBoolean()
  consent: boolean;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  notes: string;

  @IsNotEmpty()
  @IsObject()
  custom: any;
}

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  phone: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  country: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  city: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  org: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  role: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  ticketType: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  dietary: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  accessibility: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  emergencyName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  emergencyPhone: string;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  marketingOptIn: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  consent: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  notes: string;

  @IsOptional()
  @IsNotEmpty()
  @IsObject()
  custom: any;
}
