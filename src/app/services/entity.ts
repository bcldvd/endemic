export enum ContactType {
  EMAIL = 'email',
  MOBILE = 'mobile',
}

export class ActivityRecord {
  id?: string; //
  tenantId: string; // restaurant or shop id;
  email?: string;
  mobile?: string;
  startTime: string;
  endTime: string;
  firstName?: string;
  lastName?: string;
  contactPrefer: ContactType;
}
