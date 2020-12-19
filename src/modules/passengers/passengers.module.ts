import { Module } from '@nestjs/common';
import { PassengersController } from './passengers.controller';
import { PassengersService } from './passengers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passenger } from './passengers.entity';
import {PassengersRepository} from "./passengers.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Passenger, PassengersRepository])],
  controllers: [PassengersController],
  providers: [PassengersService],
  exports: [PassengersService],
})
export class PassengersModule {}
