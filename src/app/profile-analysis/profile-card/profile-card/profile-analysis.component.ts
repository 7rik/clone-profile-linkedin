import { Component } from '@angular/core';
import { faArrowRight, faEye, faSearch, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-analysis',
  templateUrl: './profile-analysis.component.html',
  styleUrls: ['./profile-analysis.component.scss']
})
export class ProfileAnalysisComponent {
  public icons = {
    showOnly: faEye,
    profileViews: faUserGroup,
    profileResults: faSearch,
    showAllAnalysis: faArrowRight
  }
}
