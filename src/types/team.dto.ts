import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  phone: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  role: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  shift: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  img: string;

  @IsOptional()
  @IsObject()
  custom: any;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  status: string;
}

export class UpdateTeamDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  phone: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  role: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  shift: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  img: string;

  @IsOptional()
  @IsObject()
  custom: any;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  status: string;
}
