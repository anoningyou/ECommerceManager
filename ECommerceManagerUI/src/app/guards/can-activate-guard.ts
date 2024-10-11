import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Roles } from 'src/app/enums/roles';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment';

export const canActivateGuard: CanActivateFn = (route) => {
  if (!!environment.accessRoleIgnore) return true;

  const accountService = inject(AccountService);
  const currentUser = accountService.currentUser();

  if (!accountService.currentUser()) return false;

  const roles: Roles[] = route.data['roles'];
  if (!roles || roles.length == 0) return true;

  if (!currentUser || !currentUser.roles || currentUser.roles.length == 0)
    return false;

  return accountService.userIsInAnyRole(roles);
};
