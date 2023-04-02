import type { Repository as TypeOrmRepository } from "typeorm";

import type { IRepository } from "@/abstracts/repositories";
import type { IEntity } from "@/domain";
import type { PrimitiveKey } from "@/common/types";

export default class Repository<T extends IEntity<K>, K extends PrimitiveKey>
  implements IRepository<T, K>
{
  protected adapter!: TypeOrmRepository<T>;

  public getAll() {
    return this.adapter.find();
  }

  public async getById(id: K) {
    try {
      // TODO: Fix error expecting, research the core problem
      // @ts-expect-error TS2345: Argument of type '{ where: { id: K; }; }' is not assignable to parameter of type 'FindOneOptions<T>'.
      const entity = await this.adapter.findOne({ where: { id } });
      return entity;
    } catch (error) {
      return null;
    }
  }

  public async add(entity: T) {
    const addedEntity = await this.adapter.save(entity);
    return addedEntity;
  }

  public async updateById(id: K, entity: T) {
    // TODO: Fix error expecting, research the core problem
    // @ts-expect-error TS2345: Argument of type 'T' is not assignable to parameter of type 'DeepPartial<T>'.
    await this.adapter.update(id, entity);
    const updatedEntity = (await this.getById(id))!;
    return updatedEntity;
  }

  public async deleteById(id: K) {
    await this.adapter.delete(id);
  }
}
