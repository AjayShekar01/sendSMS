import fs from 'fs';
import jsyaml from 'js-yaml';

const configsPath = '/run/secrets';
const appConfigs = jsyaml.safeLoad(
  fs.readFileSync(`${configsPath}/app_configs`, 'utf8'),
);

// export { appConfigs  };
export default appConfigs;
