import { inject } from '@angular/core';
import { AccountService } from './../_services/account.service';
import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  if (accountService.CurrentUser())
  {
    return true;
  }
  else
  {
    toastr.error('You shall not pass!');
    return false;
  }

};
