import { V } from '@angular/cdk/keycodes';
import { CurrencyPipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap, take } from 'rxjs';
import { InputDateComponent } from "src/app/components/common/inputs/input-date/input-date.component";
import { RouteConstants } from 'src/app/constants/route-constants';
import { CustomerDto } from 'src/app/dto/customer-dto';
import { CustomerReportDto } from 'src/app/dto/customer-report-dto';
import { DatesPeriodEnum } from 'src/app/enums/dates-period';
import { IReportFilter } from 'src/app/interfaces/filters/report-filter';
import { DecimalPricePipe } from "src/app/pipes/decimal-price.pipe";
import { CustomersService } from 'src/app/services/customers.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    InputDateComponent,
    DecimalPricePipe,
    CurrencyPipe,
  ],
  providers: [DecimalPricePipe, CurrencyPipe],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent {
  //#region private fields

  private readonly _customersService: CustomersService =
    inject(CustomersService);

  private readonly _reportsService: ReportsService = inject(ReportsService);

  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  private readonly _router: Router = inject(Router);

  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  //#endregion private fields

  //#endregion protected fields

  //#region Properties

  protected readonly customerId: WritableSignal<string | null> = signal<
    string | null
  >(null);

  protected readonly customer: WritableSignal<CustomerDto | null> =
    signal<CustomerDto | null>(null);

  protected readonly customerName: Signal<string> =
    computed(() => {
      return this.customer()
      ? `${this.customer()?.name} ${this.customer()?.lastName}`
      : '';
    });

  protected readonly filter: WritableSignal<IReportFilter | null> =
    signal<IReportFilter | null>(null);

  protected readonly report: WritableSignal<CustomerReportDto | null> =
    signal<CustomerReportDto | null>(null);

  protected readonly datesForm = new FormGroup({
    startDate: new FormControl(null as Date | null, [Validators.required]),
    endDate: new FormControl(null as Date | null, [Validators.required]),
  });

  protected readonly datesPeriodEnum: typeof DatesPeriodEnum = DatesPeriodEnum;

  //#endregion Properties

  //#region Constructor

  constructor() {
    this.onPeriodChange(DatesPeriodEnum.LastWeek);

    this._activatedRoute.params.pipe(takeUntilDestroyed()).subscribe(() => {
      this.initNavigation();
    });

    effect(
      () => {
        const customerId = this.customerId();

        this.filter.update((filter) => {
          return Object.assign({}, filter, {
            customerId: customerId,
          });
        });

        if (customerId) {
          this._customersService
            .getCustomer(customerId)
            .pipe(take(1), takeUntilDestroyed(this._destroyRef))
            .subscribe((result) => {
              this.customer.set(result);
            });
        } else {
          this.customer.set(null);
        }
      },
      { allowSignalWrites: true }
    );

    toObservable(this.filter)
      .pipe(
        switchMap((filter) => {
          if (filter && filter.customerId) {
            return this._reportsService.getCustomerReport(filter).pipe(
              take(1),
              map((result) => {
                this.report.set(result);
                return null;
              })
            );
          } else {
            this.report.set(null);
            return of(null);
          }
        }),
        takeUntilDestroyed()
      )
      .subscribe();
  }

  //#endregion Constructor

  //#region Event handlers

  public onRefresh() {
    if (this.datesForm.valid) {
      this.filter.update((filter) => {
        return Object.assign({}, filter, {
          startDate: this.datesForm.controls.startDate.value,
          endDate: this.datesForm.controls.endDate.value,
        });
      });
    } else {
      this.datesForm.markAllAsTouched();
    }
  }

  public onPeriodChange(period: DatesPeriodEnum) {
    this.setPeriod(period);
    this.onRefresh();
  }

  //#endregion Event handlers

  //#region private methods

  private setPeriod(period: DatesPeriodEnum) {
    const startDate = new Date();
    let endDate = new Date();
    if (period === DatesPeriodEnum.LastWeek) {
      startDate.setDate(startDate.getDate() - 7);
    } else if (period === DatesPeriodEnum.LastMonth) {
      startDate.setMonth(startDate.getMonth() - 1);
    }

    this.datesForm.patchValue({
      startDate: startDate,
      endDate: endDate,
    });
  }

  private initNavigation(): void {
    const customerId: string =
      this._activatedRoute.snapshot.params[RouteConstants.Reports.CustomerId];
    this.customerId.set(customerId);
  }

  //#endregion private methods
}
