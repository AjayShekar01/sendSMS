import { format, transports, loggers } from 'winston';
import 'winston-daily-rotate-file';

import DailyRotateFile = require('winston-daily-rotate-file');

const logStorageBasePath = '/server/data/logs';

const { combine, label, json, timestamp, prettyPrint } = format;

const jsonFormat = combine(
  label({ label: 'General logs' }),
  timestamp(),
  json(),
);
const prettyFormat = combine(
  label({ label: 'General logs' }),
  timestamp(),
  prettyPrint(),
);

const dailyRotateFileOptions: DailyRotateFile.DailyRotateFileTransportOptions = {
  filename: `${logStorageBasePath}/general-logger-%DATE%.log`,
  level: 'debug',
  datePattern: 'YYYY-MM-DD',
  // datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '10m',
  // maxFiles: '14d',
  format: jsonFormat,
};

loggers.add('general-logger', {
  transports: [
    new transports.Console({
      // console level in production: error?
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      format: process.env.NODE_ENV === 'production' ? jsonFormat : prettyFormat,
    }),
    new transports.DailyRotateFile(dailyRotateFileOptions),
  ],
});

const generalLogger = loggers.get('general-logger');

if (process.env.NODE_ENV !== 'production') {
  generalLogger.debug('Logging initialized at debug level');
}

export default generalLogger;
