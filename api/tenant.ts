import { NowRequest, NowResponse } from '@vercel/node';
import { menu } from '../data/marzo/menu';
import { Tenant } from '../src/app/order/tenant.interface';

const MOCK_DATA: { [key: string]: Tenant } = {
  'restaurant-1': {
    logoUrl: 'http://localhost:3000/assets/marzo.png',
    bannerUrl: '',
    menu,
    id: 'restaurant-1',
    name: 'Marzo',
  },
};

export default (req: NowRequest, res: NowResponse) => {
  const tenantId = (req.query as any).tenantId;
  res.status(200).send(MOCK_DATA[tenantId]);
};
