import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { AccountService } from "src/app/services/account.service";
import { IMenuItem, RouteConstants } from "src/app/constants/route-constants";
import { MatMenuModule } from "@angular/material/menu";
import { KeyValue } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconButton,
    MatIcon,
    MatMenuModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HeaderComponent {

  //#region private fields

  private readonly _router: Router = inject(Router);
  private readonly _accountService: AccountService = inject(AccountService);

  //#endregion private fields

  //#region public properties

  public readonly isLoggedIn: Signal<boolean> = computed(
    () => !!this._accountService.currentUser()
  )

  public readonly userName: Signal<string> = computed(
    () => this._accountService.currentUser()?.userName ?? ""
  )

  private readonly _menuItems: IMenuItem[] = [
    RouteConstants.Products,
    RouteConstants.Customers,
  ]

  public readonly awailableItems: Signal<IMenuItem[]> = computed(
    () => this._menuItems.filter((item) => this._accountService.userIsInAnyRole(item.Roles))
  )

  //#endregion public properties

  //#region event handlers

  ngOnInit(): void {
    if (!this._accountService.currentUser()) {
      this._router.navigate([`/${RouteConstants.Account.Login.Root.key}`]);
    }
  }

  public onLogin(): void {
    this._accountService.logout();
    this._router.navigate([`/${RouteConstants.Account.Login.Root.key}`]);
  }

  public onRegister(): void {
    this._accountService.logout();
    this._router.navigate([`/${RouteConstants.Account.Register.Root.key}`]);
  }

  public onLogout(): void {
    this._accountService.logout();
    this._router.navigate([`/${RouteConstants.Account.Login.Root.key}`]);
  }

  //#endregion event handlers

}
