import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse) => {
  const date = new Date().toString();
  res.status(200).send({ date });
};
