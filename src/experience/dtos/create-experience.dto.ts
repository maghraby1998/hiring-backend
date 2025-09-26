import { IsDateString, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsDateString()
  from: Date;

  @IsDateString()
  to: Date;

  @IsString()
  title: String;

  @IsString()
  description: String;
}
