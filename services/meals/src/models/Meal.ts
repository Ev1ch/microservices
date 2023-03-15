import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import type { IMeal } from '@/domain';

@Entity('meals')
export default class Meal implements IMeal {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column()
  public name!: string;
}
