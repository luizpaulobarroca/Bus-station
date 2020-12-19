import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Bus } from './bus.entity';

@Injectable()
export class BusesService {
  constructor(
    @InjectRepository(Bus)
    private readonly busRepository: Repository<Bus>,
  ) {}

  public async findAll(): Promise<Bus[]> {
    return await this.busRepository.find();
  }

  public async findById(id: number): Promise<Bus | null> {
    return await this.busRepository.findOneOrFail(id);
  }

  public async create(user: Bus): Promise<Bus> {
    return await this.busRepository.save(user);
  }

  public async update(id: number, newValue: Bus): Promise<Bus | null> {
    const user = await this.busRepository.findOneOrFail(id);
    if (!user.id) {
      // tslint:disable-next-line:no-console
      console.error("bus doesn't exist");
    }
    await this.busRepository.update(id, newValue);
    return await this.busRepository.findOne(id);
  }

  public async delete(id: number): Promise<DeleteResult> {
    return await this.busRepository.delete(id);
  }
}
