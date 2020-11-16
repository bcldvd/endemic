export interface BaseCustomer {
    contactMethod: ContactMethod;
}

export interface CustomerEmail extends BaseCustomer {
    phone: string;
}

export interface CustomerPhone extends BaseCustomer{
    email: string;
}

export type Customer = CustomerPhone | CustomerEmail;

export enum ContactMethod {
    MAIL = 'MAIL',
    SMS = 'SMS'
}
