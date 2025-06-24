# base image
FROM node:18.18.0-alpine
# working directory
WORKDIR /app
# add binaries to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# set environment variables
# ENV NEXT_PUBLIC_FIREBASE_API_KEY='AIzaSyCP-fkyfSo4zDNr5xV5Hc0ZvtW7kTnL0F0'
# ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN='tclaro-okr-app.firebaseapp.com'
# ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID='claro-okr-app'
# ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET='claro-okr-app.firebasestorage.app'
# ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID='409469514907'
# ENV NEXT_PUBLIC_FIREBASE_APP_ID='1:409469514907:web:a93cce965b4144fc9a423e'
# ENV NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID='G-5CPBCDMM7T'
# ENV NEXT_PUBLIC_LS_SECRET_KEY='4f8cA7dLq9M1vRwXTzY3bN2p6kJVG5QE'
# ENV NEXT_PUBLIC_SERVER='https://server-409469514907.asia-south1.run.app'

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
