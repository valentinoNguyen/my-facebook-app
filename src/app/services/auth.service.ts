import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { LoginModel } from '../routes/auth/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(loginModel: LoginModel): Observable<string> {
    if (loginModel.username === 'admin' && loginModel.password === 'admin123') {
      return of('XXX-XXX').pipe(
        delay(2000),
        take(1)
      );
    }
    return of(null).pipe(
      delay(2000),
      take(1)
    );
  }

}
