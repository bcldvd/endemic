export interface MenuItem {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export class Tenant {
  logoUrl: string;
  name?: string;
  bannerUrl: string;
  menuItems: MenuItem[];
}

export const DEFAULT_TENANT = {
  logoUrl: './assets/endemic-logo.png',
  name: 'Endemic',
};
