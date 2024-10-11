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
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { take } from "rxjs";
import { ProductDto } from 'src/app/dto/product-dto';
import { IProductsFilter } from 'src/app/interfaces/filters/products-filter';
import { IPaginatedResult } from 'src/app/interfaces/paginated-result';
import { ProductsFilter } from 'src/app/models/filters/products-filter';
import { DecimalPricePipe } from "src/app/pipes/decimal-price.pipe";
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatCardModule, DecimalPricePipe, CurrencyPipe],
  providers: [DecimalPricePipe, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  //#region private fields

  private readonly _productsService: ProductsService = inject(ProductsService);

  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  //#endregion private fields

  //#endregion protected fields

  //#region Properties

  protected readonly filter: WritableSignal<IProductsFilter> =
    signal<IProductsFilter>(new ProductsFilter());

  protected readonly productsResult: WritableSignal<
    IPaginatedResult<ProductDto[]>
  > = signal<IPaginatedResult<ProductDto[]>>({
    result: [],
    pagination: {
      pageNumber: 0,
      pageSize: 10,
      totalCount: 0,
      totalPages: 0,
    },
  });

  protected readonly products: Signal<ProductDto[]> = computed(
    () => this.productsResult().result ?? []
  );

  displayedColumns: string[] = ['name', 'price'];

  //#endregion Properties

  //#region Constructor

  constructor() {
    effect(() => {
      this._productsService.getProducts(this.filter())
      .pipe(take(1), takeUntilDestroyed(this._destroyRef))
      .subscribe((result) => {
        this.productsResult.set(result);
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

  //#endregion Event handlers
}
