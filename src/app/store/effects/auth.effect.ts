import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AuthActions } from '../actions';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        switchMap(({ loginModel }) => {
          return this.authService.login(loginModel).pipe(
            map(token => AuthActions.loginSuccess({ token })),
            catchError(() => of(AuthActions.loginFailure()))
          );
        }),
      ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(_ => {
          this.router.navigate(['/dashboard']);
        }),
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}
