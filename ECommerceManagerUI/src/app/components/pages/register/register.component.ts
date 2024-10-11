import { KeyValue } from "@angular/common";
import { ChangeDetectionStrategy, Component, DestroyRef, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { AbstractControl, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { take } from "rxjs";
import { InputTextComponent } from "src/app/components/common/inputs/input-text/input-text.component";
import { RegisterDto } from "src/app/dto/register-dto";
import { AccountService } from "src/app/services/account.service";
import { CustomValidators } from "src/app/validators/custom-validator";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
//#region Private fields

private readonly _formBuilder: FormBuilder = inject(FormBuilder);

private readonly _accountService: AccountService = inject(AccountService);

private readonly _destroyRef: DestroyRef = inject(DestroyRef);

private readonly _router: Router = inject(Router);

private readonly _toastr: ToastrService = inject(ToastrService);

//#region Private fields

//#region Properties

public formGroup = this._formBuilder.group({
  login: new FormControl<string | null>(null, [Validators.required]),
  password: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/^(?=[^A-Za-z]*[A-Za-z])(?=\D*\d).{2,}$/)]),
  confirmPassword: new FormControl<string | null>(null, [Validators.required, CustomValidators.matchValues('password')]),
});

public readonly additionalErrorPasswordFunctions: KeyValue<string, (control: AbstractControl, label?: string) => string>[]
= [
  {
    key: "pattern",
    value: (control: AbstractControl, label?: string) => `${label ?? "Field"} must contain at least 1 letter and 1 digit`
  },
  {
    key: "matchValues",
    value: (control: AbstractControl, label?: string) => `${label ?? "Field"} must be the same as password`
  }
];

//#endregion Properties

//#region Event handlers

public ngOnInit(): void {

  if (this._accountService.currentUser()) {
    this._router.navigate(["/"]);
  }

  this.formGroup.controls.password.valueChanges.subscribe({
    next: () => this.formGroup.controls.confirmPassword.updateValueAndValidity()
  });
}

public onSubmit(): void {
  if (!this.formGroup.valid) {
    this.formGroup.markAllAsTouched();
    return;
  }

  const registerDto = {
    userName: this.formGroup.controls.login.value,
    password: this.formGroup.controls.password.value,
  } as RegisterDto;

  this._accountService.register(registerDto)
  .pipe(take(1), takeUntilDestroyed(this._destroyRef))
  .subscribe({
    next: (_) => {
      this._router.navigate(["/"]);
    },
    error: (errors) => {
      if (Array.isArray(errors)) {
        errors.forEach((error) => {
          this._toastr.error(error);
        });
      }
    }
  });
}

onCancel() {
  this._router.navigate(["/"]);
}

//#endregion Event handlers
}
