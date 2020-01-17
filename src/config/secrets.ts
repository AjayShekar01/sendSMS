import fs from 'fs';
import jsyaml from 'js-yaml';

const secretsPath = '/run/secrets';
const appSecrets = jsyaml.safeLoad(
  fs.readFileSync(`${secretsPath}/app_secrets`, 'utf8'),
);
const serviceAccountKey = JSON.parse(
  fs.readFileSync(`${secretsPath}/sa_key`, 'utf8'),
);

export { appSecrets, serviceAccountKey };
