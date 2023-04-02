import type { IIngredientsRepository } from "@/abstracts/repositories";
import { Ingredient } from "@/models";
import { runner } from "@/database";
import Repository from "./Repository";

export default class IngredientsRepository
  extends Repository<Ingredient, string>
  implements IIngredientsRepository
{
  protected adapter = runner.manager.getRepository(Ingredient);
}

export const ingredientsRepository = new IngredientsRepository();
