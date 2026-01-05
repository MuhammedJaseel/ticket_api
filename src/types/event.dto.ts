import {
  IsNotEmpty,
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
  @IsString()
  ticketTypes: any[];

  @IsOptional()
  @IsString()
  badgeProfile: any;

  @IsOptional()
  @IsString()
  invitationSettings: any;

  @IsOptional()
  @IsString()
  hallAccess: any[];

  @IsOptional()
  @IsString()
  volunteerRoles: string[];

  @IsOptional()
  @IsString()
  shiftTemplates: any[];

  @IsOptional()
  @IsString()
  volunteerBadgeProfile: any;

  @IsOptional()
  @IsString()
  volunteerHallAccess: any[];
}
