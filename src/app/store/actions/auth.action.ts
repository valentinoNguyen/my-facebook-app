import { LoginModel } from 'src/app/routes/auth/models/login.model';
import { createAction, props } from '@ngrx/store';

const prefix = 'Auth';

export const login = createAction(
  `[${prefix}] Login`,
  props<{ loginModel: LoginModel }>()
);

export const loginSuccess = createAction(
  `[${prefix}] Login success`,
  props<{ token: string }>()
);

export const loginFailure = createAction(`[${prefix}] Login failure`);
