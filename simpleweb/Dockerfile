# Specify a base image 
FROM node:14-alpine

# Specify work directory so that things are relative to this folder
WORKDIR /usr/app

# Install deps
COPY ./package.json ./
RUN npm install 
COPY ./ ./
# Set up default command
CMD ["npm", "start"]