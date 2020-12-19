import {
  Controller,
  Delete,
  HttpStatus,
  Param,
  Response, UseGuards,
} from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@Controller('passengers')
@ApiTags('passengers')
export class PassengersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Delete(':id')
  public async delete(@Param() params, @Response() res) {
    const result = await this.passengersService.delete(params.id);
    return res.status(HttpStatus.OK).json(result);
  }
}
