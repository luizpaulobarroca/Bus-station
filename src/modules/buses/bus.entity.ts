import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from '../users/user.entity';

@Entity('bus')
export class Bus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  plate: string;

  @Column()
  @IsNotEmpty()
  year: number;

  @Column()
  @IsNotEmpty()
  model: string;

  @Column()
  @IsNotEmpty()
  seats: number;

  @ManyToOne(() => User)
  user: User;
}
