import { Component } from '@angular/core';
import { faBell, faBriefcase, faCircleUser, faCommentDots, faGrip, faGripVertical, faHome, faSearch, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  public icons = {
    search: faSearch,
    home: faHome,
    network: faUserGroup,
    jobs: faBriefcase,
    messages: faCommentDots,
    notification: faBell,
    profile: faCircleUser,
    business: faGrip
  }
}
