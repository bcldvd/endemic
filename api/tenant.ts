import { NowRequest, NowResponse } from '@vercel/node';
import { MenuItem, Tenant } from '../src/app/order/tenant.interface';

const restaurant1Menu: MenuItem[] = [
  {
    name: "SLIGHTLY COOKED EGG",
    description: "Lardo di Colonnata and black truffle",
    price: 85,
    imageUrl: "https://felonsbrewingco.com.au/wp-content/uploads/2020/11/instagram-17879204341887046-256x256.jpg"
  },
  {
    name: "TRUFFLED GREEN ASPARAGUS",
    description: "Château-Chalon wine mousseline",
    price: 90,
    imageUrl: "https://felonsbrewingco.com.au/wp-content/uploads/2020/11/instagram-17879204341887046-256x256.jpg"
  },
  {
    name: "GRILLED LAMB FROM AVEYRON WITH CHILI PEPPER SAUCE",
    description: "crunchy vegetables",
    price: 105,
    imageUrl: "https://felonsbrewingco.com.au/wp-content/uploads/2020/11/instagram-17879204341887046-256x256.jpg"
  },
  {
    name: "GRILLED LAMB FROM AVEYRON WITH CHILI PEPPER SAUCE",
    description: "crunchy vegetables",
    price: 105,
    imageUrl: "https://felonsbrewingco.com.au/wp-content/uploads/2020/11/instagram-17879204341887046-256x256.jpg"
  },
  {
    name: "CUTTLEFISH LIKE TAGLIATELLE",
    description: "caviar / buttermilk from my childhood",
    price: 140,
    imageUrl: "https://felonsbrewingco.com.au/wp-content/uploads/2020/11/instagram-17879204341887046-256x256.jpg"
  },
  {
    name: "CUTTLEFISH LIKE TAGLIATELLE",
    description: "caviar / buttermilk from my childhood",
    price: 140,
    imageUrl: "https://felonsbrewingco.com.au/wp-content/uploads/2020/11/instagram-17879204341887046-256x256.jpg"
  },
  {
    name: "CUTTLEFISH LIKE TAGLIATELLE",
    description: "caviar / buttermilk from my childhood",
    price: 140,
    imageUrl: "https://felonsbrewingco.com.au/wp-content/uploads/2020/11/instagram-17879204341887046-256x256.jpg"
  },
  {
    name: "CUTTLEFISH LIKE TAGLIATELLE",
    description: "caviar / buttermilk from my childhood",
    price: 140,
    imageUrl: "https://felonsbrewingco.com.au/wp-content/uploads/2020/11/instagram-17879204341887046-256x256.jpg"
  },
]

const MOCK_DATA: { [key: string]: Tenant } = {
  'restaurant-1': {
    logoUrl: 'https://pngimg.com/uploads/mcdonalds/mcdonalds_PNG17.png',
    bannerUrl: "",
    menuItems: restaurant1Menu
  },
};

export default (req: NowRequest, res: NowResponse) => {
  const tenantId = (req.query as any).tenantId;
  res.status(200).send(MOCK_DATA[tenantId]);
};
