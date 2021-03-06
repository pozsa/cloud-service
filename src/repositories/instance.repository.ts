import { Instance, User, Pagination } from '../models';
import { inject } from '@loopback/core';
import { BaseRepository } from './base.repository';
import { TypeORMDataSource } from '../datasources';
import { In, FindManyOptions } from 'typeorm';

export class InstanceRepository extends BaseRepository<Instance, number> {
  constructor(@inject('datasources.typeorm') dataSource: TypeORMDataSource) {
    super(dataSource, Instance);
  }

  getAll(options?: FindManyOptions<Instance>, pagination?: Pagination): Promise<Instance[]> {
    return super.getAll({ where: { deleted: false }, order: { id: 'DESC' } }, pagination);
  }

  async getAllForUser(user: User, pagination?: Pagination): Promise<Instance[]> {
    // Has to be done in two calls because if we do a single query with a constraint on the userId, we only get one member returned for all instances
    const queryBuilder = await super.createQueryBuilder('instance');

    // Get all instance Ids
    const instanceIds = (await queryBuilder
      .select('instance.id')
      .innerJoin('instance.members', 'member')
      .leftJoin('member.user', 'user')
      .where({deleted: false})
      .andWhere('user.id = :userId', {userId: user.id})
      .getMany())
      .map(data => data.id);


    if (instanceIds.length > 0) {
      // Get full instances
      return super.getAll({where: {id: In(instanceIds)}, order: { id: 'DESC' }}, pagination);

    } else {
      return [];
    }
  }

  async getByIdForUserId(id: number, userId: number): Promise<Instance> {
    // Has to be done in two calls because if we do a single query with a constraint on the userId, we only get one member returned for all instances
    const queryBuilder = await super.createQueryBuilder('instance');

    // Get all instance Ids
    const instanceIds = (await queryBuilder
      .select('instance.id')
      .innerJoin('instance.members', 'member')
      .leftJoin('member.user', 'user')
      .where({deleted: false})
      .andWhere('user.id = :userId', {userId: userId})
      .getMany())
      .map(data => data.id);

    if (instanceIds.includes(id)) {
      return super.getById(id);

    } else {
      return null;
    }
  }
}
