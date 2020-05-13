import express from 'express';

const unirest = require('unirest');

const { OpenApiValidator } = require('express-openapi-validator');
const ErrorResponse = require('./util/errorResponse');
const errorHandler = require('./util/error');
// import { appSecrets, serviceAccountKey } from './config/secrets';
// import { appConfigs } from './config/configs';
// import appConfigs from './config/configs';
// import logger from './util/logger';

// logger.verbose(appConfigs);
// logger.verbose(appSecrets);
// logger.verbose(serviceAccountKey);

const app = express();

// Body parser
app.use(express.json());

const port = 3000;

new OpenApiValidator({
  apiSpec:
    '/home/ajay/apps/NodeMessage/sample-ts-server/_data/openapispec.yaml',
  validateResponses: true, // <-- to validate responses
  validateRequests: true,
  // unknownFormats: ['my-format'] // <-- to provide custom formats
})
  .install(app)
  .then(() => {
    

    app.post('/api/v2/sendsms', (req, res, next) => {
      const { name, phone, text } = req.body;
      const status: number = 200;
      const reqst = unirest('POST', 'https://www.fast2sms.com/dev/bulk');

      reqst.headers({
        authorization:
          'yIKi5ZSsT6qnaQCLoMxtp97bD2BvkGwjerANHzlRXJdcFVm4fuJTfY9MdLNXrvEUIwgR7a3OicFxqQzp',
      });

      reqst.form({
        sender_id: 'FSTSMS',
        message: `This is a test message ${text}`,
        language: 'english',
        route: 'p',
        numbers: phone,
      });

      reqst.end(function(resp: any) {
        if (resp.error) {
          console.log(
            `Failure: message is not sent to ${name} : ${resp.body.message}`,
          );
          next(
            new ErrorResponse(
              `Failure: message is not sent to ${name} : ${resp.body.message}`,
              400,
            ),
          );
        } else {
          console.log(
            `Success: message is sent to ${name} ${resp.body.message}`,
          );
          res.status(200).send('Message sent');
        }
      });
    });

    app.use(errorHandler);
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
