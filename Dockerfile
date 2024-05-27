# pull official base image
FROM node:20-alpine

# set working directory
WORKDIR /app

# add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN apk add --no-cache git
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# add app
COPY . ./

# start app
CMD ["npm", "start"]