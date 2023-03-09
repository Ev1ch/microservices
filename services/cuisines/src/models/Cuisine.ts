import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import type { ICuisine } from '@/domain';

@Entity('cuisines')
export default class Cuisine implements ICuisine {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column()
  public name!: string;
}
