import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerService } from "../../../services/spinner.service";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    MatProgressSpinnerModule
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {

  private readonly _spinnerService: SpinnerService = inject(SpinnerService);

  public readonly showSpinner = this._spinnerService.showSpinner;
}
