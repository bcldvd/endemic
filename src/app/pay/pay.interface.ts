export interface BaseCustomer {
  contactMethod: ContactMethod;
}

export interface CustomerEmail extends BaseCustomer {
  email: string;
}

export interface CustomerPhone extends BaseCustomer {
  phone: string;
}

export type Customer = CustomerPhone | CustomerEmail;

export enum ContactMethod {
  MAIL = 'MAIL',
  SMS = 'SMS',
}

export interface EndemicUserAttendance {
  email?: string;
  phone?: string;
  tenantId: string;
  date: number;
}
