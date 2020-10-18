FROM node
EXPOSE 8081
COPY . .
RUN npm install

ENV REACT_APP_SET_AUTH="firebase"

RUN npm run build

CMD npm run server
