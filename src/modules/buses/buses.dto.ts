import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";
import {Column} from "typeorm";

export class CreateBusDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  @IsNotEmpty()
  plate: string;

  @ApiProperty()
  @IsNotEmpty()
  year: number;

  @ApiProperty()
  @IsNotEmpty()
  model: string;

  @ApiProperty()
  @IsNotEmpty()
  seats: number;
}
