import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name: string;
}
