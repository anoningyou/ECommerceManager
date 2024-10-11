import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from "@angular/core";
import { AccountService } from "src/app/services/account.service";

export const authenticationInterceptor: HttpInterceptorFn = (request, next) => {

  const accountService = inject(AccountService);
  const user = accountService.currentUser();
  if (user) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  }

  return next(request)

}
