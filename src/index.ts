import express from 'express';
import { appSecrets, serviceAccountKey } from './config/secrets';
// import { appConfigs } from './config/configs';
import appConfigs from './config/configs';
import logger from './util/logger';

logger.verbose(appConfigs);
logger.verbose(appSecrets);
logger.verbose(serviceAccountKey);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.send("The sedulous hyena ate the antelope!");
  res.send('The lion ate the antelope!');
  logger.error('Hello');
  logger.warn('Hello');
  logger.info('Hello');
  logger.verbose('Hello');
  logger.debug('Hello');
});
// const reallyLongArg = () => {};
// const omgSoManyParameters = () => {
//   //
//   const z = 1;

//   //
//   const z2 = 1;
// };
// const IShouldRefactorThis = () => {};
// const isThereSeriouslyAnotherOne = () => {};
// const foo = (q, w, e, r, t, y, u) => {};
// const f =
//   'http://q.om/qwqwwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww';

// foo(
//   reallyLongArg(),
//   omgSoManyParameters(),
//   IShouldRefactorThis(),
//   isThereSeriouslyAnotherOne(),
//   isThereSeriouslyAnotherOne(),
//   isThereSeriouslyAnotherOne(),
//   isThereSeriouslyAnotherOne(),
// );

// const a = {
//   s: 2,
//   w: 4,
//   's-d': 12,
// };

// const { s, w: q } = a;
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
