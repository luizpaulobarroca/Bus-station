import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, Matches} from "class-validator";

export class CreatePassengerDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly age: number;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(
    /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g,
  )
  readonly cpf: string;
}
