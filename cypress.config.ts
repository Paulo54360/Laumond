import { CypressConfig } from 'cypress';

const config: CypressConfig = {
  baseUrl: 'http://localhost:4200',
  integrationFolder: 'e2e',
  video: false,
  viewportWidth: 1440,
  viewportHeight: 900,
};

export default config;
