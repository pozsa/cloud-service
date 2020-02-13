import { CloudImage, CloudFlavour, CloudInstance } from "../../models";
import { SimplifiedCloudInstance } from "./simplified-cloud-instance.model";

export interface CloudProviderMockServerData {
  port: number;
  images: CloudImage[];
  flavours: CloudFlavour[];
  instances: SimplifiedCloudInstance[];
}

export const cloudProviderData: CloudProviderMockServerData[] = [{
  port: 4000,
  images: [{
    id: 1,
    name: "image 1.1",
    description: "Remote Desktop image",
    protocols: [{
      name: 'RDP',
      port: 3389
    }, {
      name: 'GUACD',
      port: 4482
    }]
  }, {
    id: 2,
    name: "image 1.2",
    description: "Jupyter Notebook image",
    protocols: [{
      name: 'HTTP',
      port: 8080
    }]
  }],
  flavours: [{
    id: 1,
    name: 'small',
    description: 'a small flavour',
    cpu: 1,
    memory: 1024
  }, {
    id: 2,
    name: 'medium',
    description: 'a medium flavour',
    cpu: 4,
    memory: 4096
  }, {
    id: 3,
    name: 'large',
    description: 'a large flavour',
    cpu: 16,
    memory: 65536
  }],
  instances: [{
    id: 1,
    name: 'instance 1.1',
    description: 'A test instance 1',
    hostname: 'instance1.host.eu',
    protocols: [{name: 'RDP', port: 31389}, {name: 'GUACD', port: 30389}],
    imageId: 1,
    flavourId: 1,
    createdAt: new Date(2020, 0, 1),
    state: {cpu: 1, memory: 1024, message: '', status: 'BUILDING'}
  }, {
    id: 2,
    name: 'instance 1.2',
    description: 'A test instance 2',
    hostname: 'instance2.host.eu',
    protocols: [{name: 'RDP', port: 31321}, {name: 'GUACD', port: 30390}],
    imageId: 1,
    flavourId: 2,
    createdAt: new Date(2020, 0, 1),
    state: {cpu: 2, memory: 2048, message: '', status: 'ACTIVE'}
  }, {
    id: 3,
    name: 'instance 1.3',
    description: 'A test instance 3',
    hostname: 'instance3.host.eu',
    protocols: [{name: 'HTTP', port: 30808}],
    imageId: 2,
    flavourId: 1,
    createdAt: new Date(2020, 0, 1),
    state: {cpu: 1, memory: 1024, message: 'No resources available', status: 'ERROR'}
  }, {
    id: 4,
    name: 'instance 1.4',
    description: 'A test instance 4',
    hostname: 'instance4.host.eu',
    protocols: [{name: 'HTTP', port: 30532}],
    imageId: 2,
    flavourId: 2,
    createdAt: new Date(2020, 0, 1),
    state: {cpu: 3, memory: 3192, message: '', status: 'BUILDING'}
  }, {
    id: 5,
    name: 'instance 1.5',
    description: 'A test instance 5',
    hostname: 'instance5.host.eu',
    protocols: [{name: 'RDP', port: 30569}, {name: 'GUACD', port: 30389}],
    imageId: 1,
    flavourId: 1,
    createdAt: new Date(2020, 0, 1),
    state: {cpu: 1, memory: 1024, message: '', status: 'ACTIVE'}
  }, {
    id: 6,
    name: 'instance 1.6',
    description: 'A test instance 6',
    hostname: 'instance6.host.eu',
    protocols: [{name: 'RDP', port: 30992}, {name: 'GUACD', port: 30389}],
    imageId: 1,
    flavourId: 2,
    createdAt: new Date(2020, 0, 1),
    state: {cpu: 2, memory: 4096, message: '', status: 'ACTIVE'}
  }]
},
{
  port: 4001,
  images: [{
    id: 1,
    name: "image 2.1",
    description: "Remote Desktop image with GPU",
    protocols: [{
      name: 'GUACD',
      port: 4482
    }]
  }, {
    id: 2,
    name: "image 2.2",
    description: "Jupyter Notebook image with GPU",
    protocols: [{
      name: 'HTTP',
      port: 8080
    }]
  }],
  flavours: [{
    id: 1,
    name: 'small GPU',
    description: 'a small flavour with GPU',
    cpu: 2,
    memory: 2048
  }, {
    id: 2,
    name: 'medium GPU',
    description: 'a medium flavour with GPU',
    cpu: 8,
    memory: 8192
  }, {
    id: 3,
    name: 'large GPU',
    description: 'a large flavour with GPU',
    cpu: 32,
    memory: 131072
  }],
  instances: [{
    id: 1,
    name: 'instance 2.1',
    description: 'A test instance 1',
    hostname: 'instance1.host2.eu',
    protocols: [{name: 'GUACD', port: 30789}],
    imageId: 1,
    flavourId: 1,
    createdAt: new Date(2020, 0, 1),
    state: {cpu: 1, memory: 1024, message: '', status: 'BUILDING'}
  }, {
    id: 2,
    name: 'instance 2.2',
    description: 'A test instance 2',
    hostname: 'instance2.host2.eu',
    protocols: [{name: 'GUACD', port: 30690}],
    imageId: 1,
    flavourId: 2,
    createdAt: new Date(2020, 0, 1),
    state: {cpu: 2, memory: 2048, message: '', status: 'ACTIVE'}
  }, {
    id: 3,
    name: 'instance 2.3',
    description: 'A test instance 3',
    hostname: 'instance3.host2.eu',
    protocols: [{name: 'GUACD', port: 30818}],
    imageId: 1,
    flavourId: 1,
    createdAt: new Date(2020, 0, 1),
    state: {cpu: 1, memory: 1024, message: '', status: 'ACTIVE'}
  }]
}];

