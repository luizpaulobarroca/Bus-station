import { EntityRepository, Repository } from 'typeorm';
import { Passenger } from './passengers.entity';

@EntityRepository(Passenger)
export class PassengersRepository extends Repository<Passenger> {}
