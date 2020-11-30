import { NowRequest, NowResponse } from '@vercel/node';
const axios = require('axios');
const noderedServerUrl = 'https://endemic-api-server.herokuapp.com/red';

export default async (request: NowRequest, response: NowResponse) => {
  const reqParams = request.query as any;
  axios
    .post(noderedServerUrl + '/covid-19-cases', {
      email: reqParams.email,
      date: reqParams.date ? reqParams.date : Date.now(),
    })
    .then((res) => {
      response.status(200);
    })
    .catch((error) => {
      console.error(error);
    });
};
