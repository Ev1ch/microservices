import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import type { IIngredient } from '@/domain';

@Entity('ingredients')
export default class Ingredient implements IIngredient {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column()
  public name!: string;
}
