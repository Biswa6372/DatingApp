import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AccountService } from '../_services/account.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService = inject(AccountService);

  if (accountService.CurrentUser()){
    req = req.clone({
      setHeaders:{
        Authorization : `Bearer ${accountService.CurrentUser()?.token}`
      }
    })
  }

  return next(req);
};
