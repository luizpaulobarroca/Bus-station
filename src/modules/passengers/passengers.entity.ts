import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne, ManyToOne,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Bus } from '../buses/bus.entity';

@Entity('passenger')
export class Passenger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  age: number;

  @Column()
  @IsNotEmpty()
  cpf: string;

  @ManyToOne(() => Bus)
  bus: Bus;
}
