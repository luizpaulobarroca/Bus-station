import {
  BadRequestException,
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
import { CreateBusDto } from './buses.dto';
import { CreatePassengerDto } from '../passengers/passengers.dto';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@Controller('buses')
@ApiTags('buses')
export class BusesController {
  constructor(private readonly busesService: BusesService) {}

  @Post('')
  public async create(@Response() res, @Body() bus: CreateBusDto) {
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
    if (result === null) {
      throw new BadRequestException('Bus not found');
    }
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':id')
  public async delete(@Param() params, @Response() res) {
    const result = await this.busesService.delete(params.id);
    return res.status(HttpStatus.OK).json(result);
  }

  @Post(':id/passengers')
  public async createPassenger(
    @Param() params,
    @Response() res,
    @Body() passengerDto: CreatePassengerDto,
  ) {
    const bus = await this.busesService.findById(params.id);
    if (bus === null) {
      throw new BadRequestException('Bus not found');
    }
    const result = await this.busesService.createPassenger(passengerDto, bus);
    if (result === null) {
      throw new BadRequestException('Bus is full');
    }
    return res.status(HttpStatus.OK).json(result);
  }

  @Get(':id/passengers')
  public async findPassengersByBus(@Param() params, @Response() res) {
    const bus = await this.busesService.findById(params.id);
    if (bus === null) {
      throw new BadRequestException('Bus not found');
    }
    const result = await this.busesService.getPassengers(bus);
    return res.status(HttpStatus.OK).json(result);
  }
}
