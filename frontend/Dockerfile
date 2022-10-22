FROM node:16-alpine

# Create app directory, this is in our container/in our image
WORKDIR /ecom/frontend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY /frontend/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY /frontend .

# RUN npm run build

EXPOSE 3000

# //! Used for dev
CMD [ "npm", "start" ]
