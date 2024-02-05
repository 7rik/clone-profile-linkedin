import { Component } from '@angular/core';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  public icons = {
    pencil: faPencil,
    close: faXmark
  }
}
