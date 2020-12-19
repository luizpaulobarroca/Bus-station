import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bus')
export class Bus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plate: string;

  @Column()
  year: number;

  @Column()
  model: string;
}
