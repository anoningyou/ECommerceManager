import { Routes } from '@angular/router';
import { RouteConstants } from "src/app/constants/route-constants";
import { canActivateGuard } from "src/app/guards/can-activate-guard";

export const routes: Routes = [
  {
    path: RouteConstants.Account.Login.Root.key,
    loadComponent: () => import("./components/pages/login/login.component").then(m => m.LoginComponent),
    data: {
      roles: RouteConstants.Account.Login.Roles
    },
    title: RouteConstants.Account.Login.Root.value
  },
  {
    path: RouteConstants.Account.Register.Root.key,
    loadComponent: () => import("./components/pages/register/register.component").then(m => m.RegisterComponent),
    data: {
      roles: RouteConstants.Account.Register.Roles
    },
    title: RouteConstants.Account.Register.Root.value
  },
  {
    path: RouteConstants.Products.Root.key,
    loadComponent: () => import("./components/pages/products/products.component").then(m => m.ProductsComponent),
    data: {
      roles: RouteConstants.Products.Roles
    },
    title: RouteConstants.Products.Root.value
  },
  {
    path: RouteConstants.Customers.Root.key,
    loadComponent: () => import("./components/pages/customers/customers.component").then(m => m.CustomersComponent),
    canActivate: [canActivateGuard],
    data: {
      roles: RouteConstants.Customers.Roles
    },
    title: RouteConstants.Customers.Root.value
  },
  {
    path: `${RouteConstants.Reports.Root.key}/:${RouteConstants.Reports.CustomerId}`,
    loadComponent: () => import("./components/pages/report/report.component").then(m => m.ReportComponent),
    canActivate: [canActivateGuard],
    data: {
      roles: RouteConstants.Reports.Roles
    },
    title: RouteConstants.Reports.Root.value
  },
  {
    path: "",
    redirectTo: RouteConstants.Products.Root.key,
    pathMatch: "full"
  }
];
