import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Passenger } from './passengers.entity';
import { PassengersRepository } from './passengers.repository';

@Injectable()
export class PassengersService {
  constructor(private readonly passengerRepository: PassengersRepository) {}

  public async findAll(): Promise<Passenger[]> {
    return await this.passengerRepository.find();
  }

  public async findById(id: number): Promise<Passenger | null> {
    return await this.passengerRepository.findOneOrFail(id);
  }

  public async create(passenger: Passenger): Promise<Passenger> {
    return await this.passengerRepository.save(passenger);
  }

  public async update(
    id: number,
    newValue: Passenger,
  ): Promise<Passenger | null> {
    const passenger = await this.passengerRepository.findOneOrFail(id);
    if (!passenger.id) {
      console.error("passenger doesn't exist");
    }
    await this.passengerRepository.update(id, newValue);
    return await this.passengerRepository.findOne(id);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.passengerRepository.delete(id);
  }
}
