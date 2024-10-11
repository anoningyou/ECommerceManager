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
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Router } from "@angular/router";
import { take } from "rxjs";
import { RouteConstants } from "src/app/constants/route-constants";
import { CustomerDto } from "src/app/dto/customer-dto";
import { ICustomersFilter } from "src/app/interfaces/filters/customers-filter";
import { IPaginatedResult } from 'src/app/interfaces/paginated-result';
import { CustomersFilter } from "src/app/models/filters/customers-filter";
import { CustomersService } from "src/app/services/customers.service";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatCardModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent {

  //#region private fields

  private readonly _customersService: CustomersService = inject(CustomersService);

  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  private readonly _router: Router = inject(Router);

  //#endregion private fields

  //#endregion protected fields

  //#region Properties

  protected readonly filter: WritableSignal<ICustomersFilter> =
    signal<ICustomersFilter>(new CustomersFilter());

  protected readonly customersResult: WritableSignal<
    IPaginatedResult<CustomerDto[]>
  > = signal<IPaginatedResult<CustomerDto[]>>({
    result: [],
    pagination: {
      pageNumber: 0,
      pageSize: 10,
      totalCount: 0,
      totalPages: 0,
    },
  });

  protected readonly customers: Signal<CustomerDto[]> = computed(
    () => this.customersResult().result ?? []
  );

  displayedColumns: string[] = ['name', 'lastName', 'address'];

  //#endregion Properties

  //#region Constructor

  constructor() {
    effect(() => {
      this._customersService.getCustomers(this.filter())
      .pipe(take(1), takeUntilDestroyed(this._destroyRef))
      .subscribe((result) => {
        this.customersResult.set(result);
      });
    }, {allowSignalWrites: true});

  }
  //#endregion Constructor

  //#region Event handlers

  onPagination($event: PageEvent) {
    if (
      this.filter().pageNumber !== $event.pageIndex + 1 ||
      this.filter().pageSize !== $event.pageSize
    ) {
      this.filter.update((filter) => {
        return Object.assign({}, filter, {
          pageNumber: $event.pageIndex + 1,
          pageSize: $event.pageSize,
        });
      });
    }
  }

  onCustomerClick(customer: CustomerDto) {
    this._router.navigate([`${RouteConstants.Reports.Root.key}/${customer.id}`]);
  }

  //#endregion Event handlers
}

