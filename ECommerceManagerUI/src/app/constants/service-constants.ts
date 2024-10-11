class Account
{
    private _root = 'Account';
    Register = `${this._root}/Register`;
    Login = `${this._root}/Login`;
}

class Products
{
    private _root = 'Products';
    GetProducts = `${this._root}/GetProducts`;
}

class Customers
{
    private _root = 'Customers';
    GetCustomers = `${this._root}/GetCustomers`;
    GetCustomer = `${this._root}/GetCustomer`;
}

class Reports
{
    private _root = 'Reports';
    GetCustomerReport = `${this._root}/GetCustomerReport`;
}

export class ServiceConstants {
  public static Account: Account = new Account();
  public static Products: Products = new Products();
  public static Customers: Customers = new Customers();
  public static Reports: Reports = new Reports();
}
