import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Bus } from './bus.entity';
import { debug } from 'console';
import { User } from '../users/user.entity';

@EntityRepository(Bus)
export class BusesRepository extends Repository<Bus> {
  findAllByLoggedUser(user: User): Promise<Bus[]> {
    return this.find({ user: user });
  }

  deleteByIdAndUserId(id: number, user: User): Promise<DeleteResult> {
    return this.delete({ user: user, id: id });
  }

  findByIdAndUser(id: number, user: User): Promise<Bus | null> {
    return this.findOneOrFail({ user: user, id: id });
  }
}
