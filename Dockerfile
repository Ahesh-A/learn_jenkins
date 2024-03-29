FROM node:21-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start"]




