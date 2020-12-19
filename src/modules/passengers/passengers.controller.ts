import {
  Controller,
  Delete,
  HttpStatus,
  Param,
  Response, UseGuards,
} from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { Passenger } from './passengers.entity';
import {AuthGuard} from "@nestjs/passport";

@UseGuards(AuthGuard('jwt'))
@Controller('passengers')
export class PassengersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Delete(':id')
  public async delete(@Param() params, @Response() res) {
    const result = await this.passengersService.delete(params.id);
    return res.status(HttpStatus.OK).json(result);
  }
}
