import { Component } from "@angular/core";
import { faArrowRight, faEye, faSatelliteDish, faUserGroup } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-profile-resources',
  templateUrl: './profile-resources.component.html',
  styleUrls: ['./profile-resources.component.scss']
})

export class ProfileResoucersComponent {
  public icons = {
    showOnly: faEye,
    signal: faSatelliteDish,
    people: faUserGroup,
    showAllresources: faArrowRight
  }
}
