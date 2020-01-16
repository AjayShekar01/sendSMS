#!/bin/bash -eux

# wait for mysql to initialise
# ./scripts/wait-for-it.sh --timeout=3600 ${DB_HOST}:${DB_PORT}
# ./scripts/wait-for-it.sh --timeout=3600 ${WAITFORIT_HOST}:${WAITFORIT_PORT}
# ./wait-for-it.sh --timeout=3600 ${SMARTAUTHZ_HOST}:3306

if [ -z ${WAITFORIT+x} ]; then 
  echo "WAITFORIT is not set"; 
else 
  # echo "var is set to '$var'"; 
  ./scripts/wait-for-it.sh --timeout=3600 ${WAITFORIT}
fi

# start application
# pm2-runtime index.js
# pm2-runtime wellofhir.config.js
# pm2-runtime ecosystem.config.js
npm run pm2-serve

