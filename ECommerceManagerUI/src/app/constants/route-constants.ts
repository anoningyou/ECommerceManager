import { KeyValue } from '@angular/common';
import { Roles } from 'src/app/enums/roles';

export interface IMenuItem {
  Root: KeyValue<string, string>;
  Roles: Roles[];
}

class Account {
  readonly Register = {
    Root: { key: `register`, value: `Register` },
    Roles: [Roles.Guest],
  } as IMenuItem;
  readonly Login = {
    Root: { key: `login`, value: `Login` },
    Roles: [Roles.Guest],
  } as IMenuItem;
}

class Products implements IMenuItem {
  readonly Root: KeyValue<string, string> = {
    key: `products`,
    value: `Products`,
  };
  readonly Roles: Roles[] = [
    Roles.Guest,
    Roles.User,
    Roles.Customer,
    Roles.Moderator,
    Roles.Admin,
  ];
}

class Customers implements IMenuItem {
  readonly Root: KeyValue<string, string> = {
    key: `customers`,
    value: `Customers`,
  };
  readonly Roles: Roles[] = [Roles.Admin, Roles.Moderator];
}

class Reports implements IMenuItem {
  readonly CustomerId = `customerId`;
  readonly Root: KeyValue<string, string> = {
    key: `report`,
    value: `Report`,
  };
  readonly Roles: Roles[] = [Roles.Admin, Roles.Moderator];
}

export class RouteConstants {
  public static readonly Account: Account = new Account();
  public static readonly Products: Products = new Products();
  public static readonly Customers: Customers = new Customers();
  public static readonly Reports: Reports = new Reports();
}
