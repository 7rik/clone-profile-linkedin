import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-localization',
  templateUrl: './profile-localization.component.html',
  styleUrls: ['./profile-localization.component.scss']
})
export class ProfileLocalizationComponent {

  public icons = {
    pencil: faPencil
  }

  constructor() {

  }
}
