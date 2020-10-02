import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';

export const featureKey = 'auth';

export interface State {
  loading: boolean;
  token: string;
}

export const initialState: State = {
  loading: false,
  token: null
};

export const reducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state) => ({
      ...state,
      loading: true
    })
  ),
  on(
    AuthActions.loginSuccess,
    (state, { token }) => ({
      ...state,
      loading: false,
      token
    })
  ),
  on(
    AuthActions.loginFailure,
    (state) => ({
      ...state,
      loading: false
    })
  ),
);

export const selectToken = (state: State) => state.token;
