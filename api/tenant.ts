import { NowRequest, NowResponse } from '@vercel/node';
import { Tenant } from '../src/app/order/tenant.interface';

const MOCK_DATA: { [key: string]: Tenant } = {
  'restaurant-1': {
    logoUrl: 'https://pngimg.com/uploads/mcdonalds/mcdonalds_PNG17.png',
  },
};

export default (req: NowRequest, res: NowResponse) => {
  const tenantId = (req.query as any).tenantId;
  res.status(200).send(MOCK_DATA[tenantId]);
};
