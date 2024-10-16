import { effect, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { map } from "rxjs";
import { ServiceConstants } from "src/app/constants/service-constants";
import { LoginDto } from "src/app/dto/login-dto";
import { RegisterDto } from "src/app/dto/register-dto";
import { UserDto } from "src/app/dto/user-dto";
import { Roles } from "src/app/enums/roles";
import { BaseHttpService } from "src/app/services/base-http.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseHttpService {

  private readonly _currentUser: WritableSignal<UserDto | null> = signal(null);

  public readonly currentUser: Signal<UserDto | null> = this._currentUser.asReadonly();

  constructor() {
    super();

    effect(() => {
      if (this.currentUser()) {
        localStorage.setItem('user', JSON.stringify(this.currentUser()));
      }
      else {
        localStorage.removeItem('user');
      }
    })

    this.loadUser();
  }

  //#region Public Methods

  register(model: RegisterDto) {
    return this.http
      .post<UserDto>(
        this.getUrl(ServiceConstants.Account.Register),
        model
      )
      .pipe(
        map((user) => {
          if (user) {
            this.setCurrentUser(user);
          }
        })
      );
  }

  login(model: LoginDto) {
    return this.http
      .post<UserDto>(
        this.getUrl(ServiceConstants.Account.Login),
        model
      )
      .pipe(
        map((user) => {
          if (user) {
            this.setCurrentUser(user);
          }
        })
      );
  }

  public logout() {
    this._currentUser.set(null);
  }


  public userIsInAnyRole(roles: Roles[]): boolean {
    return (
      (this.currentUser()?.roles?.filter(role => roles.includes(role))?.length ?? 0) > 0
    );
  }

  //#endregion Public Methods

  //#region Private Methods

  private loadUser(): void {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user: UserDto = JSON.parse(userStr) as UserDto;
      this._currentUser.set(user);
    }
    else
      this._currentUser.set(null);
  }

  private setCurrentUser(user: UserDto) {
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? (user.roles = roles) : user.roles.push(roles);

    this._currentUser.set(user);
  }

  private getDecodedToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  //#endregion Private Methods

}
