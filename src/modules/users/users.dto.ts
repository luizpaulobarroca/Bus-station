import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly city: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly state: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly confirmPassword: string;
}
