import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  clint: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  date: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  venue: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  logo: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(15)
  phone: string;

  @IsOptional()
  @IsArray()
  ticketTypes: any[];

  @IsOptional()
  @IsObject()
  badgeProfile: any;

  @IsOptional()
  @IsObject()
  invitationSettings: any;

  @IsOptional()
  @IsArray()
  hallAccess: any[];

  @IsOptional()
  @IsArray()
  volunteerRoles: string[];

  @IsOptional()
  @IsArray()
  shiftTemplates: any[];

  @IsOptional()
  @IsObject()
  volunteerBadgeProfile: any;

  @IsOptional()
  @IsArray()
  volunteerHallAccess: any[];
}


export class UpdateEventDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  clint: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  date: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  venue: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  logo: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(15)
  phone: string;

  @IsOptional()
  @IsArray()
  ticketTypes: any[];

  @IsOptional()
  @IsObject()
  badgeProfile: any;

  @IsOptional()
  @IsObject()
  invitationSettings: any;

  @IsOptional()
  @IsArray()
  hallAccess: any[];

  @IsOptional()
  @IsArray()
  volunteerRoles: string[];

  @IsOptional()
  @IsArray()
  shiftTemplates: any[];

  @IsOptional()
  @IsObject()
  volunteerBadgeProfile: any;

  @IsOptional()
  @IsArray()
  volunteerHallAccess: any[];
}
