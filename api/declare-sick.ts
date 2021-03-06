import { NowRequest, NowResponse } from '@vercel/node';
const axios = require('axios');
const noderedServerUrl = 'https://endemic-api-server.herokuapp.com';

export default async (request: NowRequest, response: NowResponse) => {
  const reqBody = request.body as any;
  axios
    .post(noderedServerUrl + '/covid-19-cases', {
      email: reqBody.email,
      date: reqBody.date ? reqBody.date : Date.now(),
    })
    .then((res) => {
      response.status(200).send(null);
    })
    .catch((error) => {
      console.error(error);
    });
};
