import { testDataSource } from '../fixtures/datasources/testdb.datasource';
import * as fs from 'fs';
import { logger } from '../../utils';
import { EntityManager } from 'typeorm';
import { TypeORMDataSource } from '../../datasources';

async function emptyDatabase(entityManager: EntityManager) {
  const tables = ['authorisation_token', 'instance_member', 'users', 'instance', 'plan', 'provider'];
  for (const table of tables) {
    try {
      await entityManager.query(`delete from ${table};`);

    } catch (error) {
      logger.error(error.message);
    }
  }
}

export function givenInitialisedTestDatabase() {
  return givenInitialisedDatabase(testDataSource);
}

export async function givenInitialisedDatabase(datasource: TypeORMDataSource) {
  const entityManager = await datasource.entityManager();

  await emptyDatabase(entityManager);

  const fixtures = fs.readFileSync('./resources/__tests__/fixtures.sql', 'utf8');
  const sqlQueries = fixtures
    .replace(/(\r\n|\n|\r)/gm, '')
    .split(';')
    .filter(query => query.length > 0)
    .map(query => query + ';');
  for (const sqlQuery of sqlQueries) {
    try {
      logger.debug(`Executing fixtures SQL query : ${sqlQuery}`);
      await entityManager.query(sqlQuery);
    } catch (error) {
      logger.error(error);
    }
  }
}

export async function closeTestDatabase() {
  await testDataSource.stop();
}
