import { NowRequest, NowResponse } from '@vercel/node';
import { marzo } from '../data/marzo/infos';
import { Tenant } from '../src/app/order/tenant.interface';

const MOCK_DATA: { [key: string]: Tenant } = {
  'restaurant-1': marzo,
};

export default (req: NowRequest, res: NowResponse) => {
  const tenantId = (req.query as any).tenantId;
  res.status(200).send(MOCK_DATA[tenantId]);
};
