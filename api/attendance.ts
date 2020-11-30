import { NowRequest, NowResponse } from '@vercel/node';
const axios = require('axios');
const noderedServerUrl = 'https://endemic-api-server.herokuapp.com';

export default async (request: NowRequest, response: NowResponse) => {
  const reqBody = request.body as any;
  axios
    .post(noderedServerUrl + '/attendances/tenant/' + reqBody.tenantId, reqBody)
    .then((res) => {
      response.status(200).send(res);
    })
    .catch((error) => {
      console.error(error);
    });
};
