import { Client, expect } from '@loopback/testlab';
import { CloudServiceApplication } from '../..';
import { setupApplication } from '../helpers/application.helper';
import { CloudProviderMockServer, stopCloudProviderMockServers } from '../mock/cloud-provider-mock.server';
import { givenInitialisedDatabase } from '../helpers/database.helper';
import { TypeORMDataSource } from '../../datasources';

describe('PingController', () => {
  let app: CloudServiceApplication;
  let client: Client;
  let datasource: TypeORMDataSource;
  let cloudProviderServers: CloudProviderMockServer[];

  before('setupApplication', async () => {
    ({ app, client, datasource, cloudProviderServers } = await setupApplication());
  });

  after(async () => {
    await stopCloudProviderMockServers(cloudProviderServers);
    await app.stop();
  });

  beforeEach('Initialise Database', async () => givenInitialisedDatabase(datasource));

  it('invokes GET /ping', async () => {
    const res = await client.get('/api/v1/ping?msg=world').expect(200);
    expect(res.body).to.containEql({ greeting: 'Hello from LoopBack' });
  });
});
