FROM node
EXPOSE 8081
COPY . .
RUN npm run build

CMD npm run server
