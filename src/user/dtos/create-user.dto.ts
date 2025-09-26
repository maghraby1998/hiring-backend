import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsEnum,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateExperienceDto } from 'src/experience/dtos/create-experience.dto';
import { CreateSkillDto } from 'src/skill/dtos/create-skill.dto';

enum UserType {
  EMPLOYEE = 'EMPLOYEE',
  EMPLOYER = 'EMPLOYER',
}

export class CreateUserDto {
  @IsString()
  name: String;

  @IsString()
  email: String;

  @IsEnum(UserType, { message: 'type must be EMPLOYEE or EMPLOYER' })
  userType: UserType;

  @ValidateNested({ each: true })
  @Type(() => CreateExperienceDto)
  experiences: CreateExperienceDto[];

  @ValidateNested({ each: true })
  @Type(() => CreateSkillDto)
  skills: CreateSkillDto[];
}
