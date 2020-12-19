import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BusesService } from './buses.service';
import { Bus } from './bus.entity';

@UseGuards(AuthGuard('jwt'))
@Controller('buses')
export class BusesController {
  constructor(private readonly busesService: BusesService) {}

  @Post('')
  public async create(@Response() res, @Body() bus: Bus) {
    const result = await this.busesService.create(bus);
    return res.status(HttpStatus.OK).json(result);
  }

  @Get('')
  public async getAll(@Response() res) {
    const result = await this.busesService.findAll();
    return res.status(HttpStatus.OK).json(result);
  }

  @Get(':id')
  public async findById(@Param() params, @Response() res) {
    const result = await this.busesService.findById(params.id);
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':id')
  public async delete(@Param() params, @Response() res) {
    const result = await this.busesService.delete(params.id);
    return res.status(HttpStatus.OK).json(result);
  }
}
