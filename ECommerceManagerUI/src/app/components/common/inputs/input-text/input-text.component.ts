import { ChangeDetectionStrategy, Component, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatError, MatFormField, MatInputModule, MatLabel } from "@angular/material/input";
import { BaseInputComponent } from "src/app/components/common/inputs/base-input";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormField,
    MatLabel,
    MatError,
    MatIcon,
    MatIconButton,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputTextComponent,
    },
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent extends BaseInputComponent<string> {

  //#region protected properties

  protected readonly hidePassword: WritableSignal<boolean> = signal(true);

  //#endregion protected properties

  //#region public properties

  public type: InputSignal<'password' | 'email' | 'text'> = input<'password' | 'email' | 'text'>('text');

  //#endregion public properties

  //#region event handlers

  protected onTogglePasswordVisibility(): void {
    this.hidePassword.update((value) => !value);
  }

  //#endregion event handlers
}
