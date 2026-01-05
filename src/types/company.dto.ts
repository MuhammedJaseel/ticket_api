import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterCompanyDto {
  @IsNotEmpty({ message: 'Owner name is required' })
  @IsString()
  @MaxLength(100, { message: 'Maximum length of owner name is 100' })
  ownerName: string;

  @IsNotEmpty({ message: 'Owner Phone is required' })
  @MinLength(6, { message: 'Not a valid phone number' })
  @MaxLength(15, { message: 'Not a valid phone number' })
  @IsString()
  ownerPhone: string;

  @IsNotEmpty({ message: 'Company name is required' })
  @MaxLength(100, { message: 'Company name too long' })
  @IsString()
  companyName: string;

  @IsNotEmpty({ message: 'Company location is required' })
  @MaxLength(100, { message: 'Company location too long' })
  @IsString()
  companyLocation: string;

  @IsOptional({ message: 'Company location is required' })
  @IsNumber()
  orgSize: number;
}
