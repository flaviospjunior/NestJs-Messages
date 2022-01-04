import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}
