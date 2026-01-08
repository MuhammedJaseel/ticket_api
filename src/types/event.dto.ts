import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  @Matches(/^[A-Z0-9._]+$/, {
    message: 'Value can only contain uppercase letters, numbers, "." and "_"',
  })
  uniqueName: string;

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
  @MaxLength(20)
  @Matches(/^[A-Z0-9._]+$/, {
    message: 'Value can only contain uppercase letters, numbers, "." and "_"',
  })
  uniqueName: string;

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
