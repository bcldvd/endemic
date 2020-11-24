export interface MenuItem {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

export interface Category {
  name: string;
  items: MenuItem[];
}

export type Menu = Category[];
export type Cart = MenuItem[];

export class Tenant {
  logoUrl: string;
  name?: string;
  bannerUrl: string;
  menu: Menu;
  id: string;
}

export const DEFAULT_TENANT = {
  logoUrl: './assets/endemic-logo.png',
  name: 'Endemic',
};
