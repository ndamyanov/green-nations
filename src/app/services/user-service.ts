import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api'

@Injectable()

export class UserService implements UserApi {
    isAuthenticated = true;

    constructor(private router: Router) { }

    signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
        console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
        this.isAuthenticated = true;
        return Observable.of({});
    }
    signOut() : Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/sign-in']);
        return Observable.of({});
    }
}