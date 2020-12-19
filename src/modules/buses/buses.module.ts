import { Module } from '@nestjs/common';
import { BusesController } from './buses.controller';
import { BusesService } from './buses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bus } from './bus.entity';
import { BusesRepository } from './buses.repository';
import { PassengersRepository } from '../passengers/passengers.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bus, BusesRepository, PassengersRepository]),
  ],
  controllers: [BusesController],
  providers: [BusesService],
  exports: [BusesService],
})
export class BusesModule {}
