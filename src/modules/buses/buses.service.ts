import { Inject, Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {DeleteResult, Repository} from 'typeorm';
import { Bus } from './bus.entity';
import { CreateBusDto } from './buses.dto';
import { REQUEST } from '@nestjs/core';
import { BusesRepository } from './buses.repository';
import { debug } from 'console';
import {Passenger} from "../passengers/passengers.entity";
import {CreatePassengerDto} from "../passengers/passengers.dto";
import {PassengersRepository} from "../passengers/passengers.repository";

@Injectable({ scope: Scope.REQUEST })
export class BusesService {
  constructor(
    private busRepository: BusesRepository,
    @Inject(REQUEST) private readonly request,
    private readonly passengerRepository: PassengersRepository,
  ) {}

  public async findAll(): Promise<Bus[]> {
    debug(this.busRepository.findAllByLoggedUser);
    return await this.busRepository.findAllByLoggedUser(this.request.user);
  }

  public async findById(id: number): Promise<Bus | null> {
    try {
      const bus = await this.busRepository.findByIdAndUser(
        id,
        this.request.user,
      );
      return bus;
    } catch (e) {
      return null;
    }
  }

  public async create(bus: CreateBusDto): Promise<Bus> {
    const newBus: Bus = {
      user: this.request.user,
      ...bus,
    };
    return await this.busRepository.save(newBus);
  }

  public async update(id: number, newValue: Bus): Promise<Bus | null> {
    const bus = await this.busRepository.findOneOrFail(id);
    if (!bus.id) {
      // tslint:disable-next-line:no-console
      console.error("bus doesn't exist");
    }
    await this.busRepository.update(id, newValue);
    return await this.busRepository.findOne(id);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.busRepository.deleteByIdAndUserId(id, this.request.user);
  }

  async createPassenger(passengerDto: CreatePassengerDto, bus: Bus) {
    const passengersList = await this.getPassengers(bus);
    if (passengersList.length >= bus.seats) {
      return null;
    }
    const newPassenger: Passenger = {
      bus,
      ...passengerDto,
    };
    return await this.passengerRepository.save(newPassenger);
  }

  async getPassengers(bus: Bus): Promise<Passenger[]> {
    return await this.passengerRepository.find({ bus });
  }
}
