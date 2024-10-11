import { KeyValue } from "@angular/common";
import { Component, computed, DestroyRef, inject, Injector, input, InputSignal, OnInit, Self, Signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, FormControlName, FormGroup, FormsModule, NG_VALUE_ACCESSOR, NgControl, NgModel, ReactiveFormsModule } from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";

@Component({
  template: '',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: BaseInputComponent,
    },
  ],
})
export abstract class BaseInputComponent<T> implements ControlValueAccessor, OnInit  {

  //#region protected properties

  protected destroyRef: DestroyRef = inject(DestroyRef);

  protected injector = inject(Injector);

  protected control: FormControl<T> = new FormControl();

  //#endregion protected properties

  //#region public properties

  public label: InputSignal<string> = input<string>("");

  public showLabel: InputSignal<boolean> = input<boolean>(true);

  public placeholder: InputSignal<string> = input<string>("");

  public errorTextFunctions: InputSignal<KeyValue<string, (control: AbstractControl, label?: string) => string> []>
    = input<KeyValue<string, (control: AbstractControl, label?: string) => string> []>([
    {
      key: "required",
       value: (control: AbstractControl, label?: string) => `${label ?? "This"} is a required field`
    },
    {
      key: "minlength",
      value: (control: AbstractControl, label?: string) => {
        if (!control.errors)
          return "";
        const length: string = control.errors['minlength'].requiredLength?.toString();
        let ending = "s";
        if (length.endsWith("1"))
          ending = "";

        return `${label ?? "Field"} must be at least ${length} caracter${ending}`
      }
    },
    {
      key: "maxlength",
      value: (control: AbstractControl, label?: string) => {
        if (!control.errors)
          return "";
        const length: string = control.errors['maxlength'].requiredLength?.toString();
        let ending = "s";
        if (length.endsWith("1"))
          ending = "";

        return `${label ?? "Field"} must be at most ${length} caracter${ending}`
      }
    },
    {
      key: "min",
      value: (control: AbstractControl, label?: string) => `Minimun value is ${control.errors!['min'].min}`
    },
    {
      key: "max",
      value: (control: AbstractControl, label?: string) => `Maximum value is ${control.errors!['max'].max}`
    },
    {
      key: "email",
      value: (control: AbstractControl, label?: string) => `${label ?? "Field"} must be a valid email`
    },
  ]);

  public additionalErrorTextFunctions: InputSignal<KeyValue<string, (control: AbstractControl, label?: string) => string>[]>
    = input<KeyValue<string, (control: AbstractControl, label?: string) => string> []>([]);

  public readonly allErrorTextFunctions: Signal<KeyValue<string, (control: AbstractControl, label?: string) => string>[]> =computed(() => {
    return [...this.errorTextFunctions(), ...this.additionalErrorTextFunctions()];
  });

  //#endregion public properties

  //#region constructor

  /** @inheritdoc */
  ngOnInit(): void {
    const ngControl = this.injector.get(NgControl, null, { self: true, optional: true });

    if (ngControl && ngControl instanceof NgModel) {
      this.control = ngControl.control;
      ngControl.control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
        if (ngControl.model !== value || ngControl.viewModel !== value) {
          ngControl.viewToModelUpdate(value);
        }
      });

    } else if (ngControl && ngControl instanceof FormControlDirective) {
      this.control = ngControl.control;

    } else if (ngControl && ngControl instanceof FormControlName && ngControl.name) {
      const container = this.injector.get(ControlContainer).control as FormGroup;
      this.control = container.controls[ngControl.name] as FormControl;

    } else {
      this.control = new FormControl();
    }
  }

  //#endregion constructor

  //#region valueAccessor

  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

  //#endregion valueAccessor

  //#region event handlers

  public getErrorMessage(): string {
    if (!this.control.errors)
      return "";

    let error = `${this.label() ?? "Field"} is invalid`;

    const errorFuncs = this.allErrorTextFunctions()
      .filter(x => !!this.control.errors![x.key]);
    if (errorFuncs.length > 0) {
      error = errorFuncs[0].value(this.control, this.label());
    }

    return error;
  }

  //#endregion event handlers

}
