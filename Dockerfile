# base image
FROM node:18.18.0-alpine
# working directory
WORKDIR /app
# add binaries to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install
# copy app files and build
COPY . /app
RUN yarn build
# ENV PORT = 3000
# start app
CMD [ "yarn", "start" ]
