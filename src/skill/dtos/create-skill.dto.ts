import { IsString } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  name: String;
}
