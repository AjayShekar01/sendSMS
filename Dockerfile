# FROM node:12-slim
FROM node:12-stretch-slim

# Update everything on the box
RUN apt-get -y update
RUN apt-get clean

# global install pm2
RUN npm install pm2 -g

WORKDIR /server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# RUN chmod +x scripts/startup.sh scripts/wait-for-it.sh
RUN chmod +x scripts/*

# CMD ["bash","/server/scripts/startup.sh"]
# CMD ["bash","scripts/startup.sh"]
CMD ["./scripts/startup.sh"]
