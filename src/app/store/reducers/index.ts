import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from 'src/app/store/reducers/auth.reducer';

export class AppState {
  [fromAuth.featureKey]: fromAuth.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>(
  'Root reducers token',
  {
    factory: () => ({
      [fromAuth.featureKey]: fromAuth.reducer,
    }),
  }
);
