import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page/profile-page.component';
import { ToolbarComponent } from './profile-toolbar/toolbar/toolbar.component';
import { ProfileCardComponent } from './profile-card/profile-card/profile-card.component';
import { AnnouncementComponent } from './announcement/announcement/announcement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileLocalizationComponent } from './profile-localization/profile-localization/profile-localization.component';
import { ProfileAnalysisComponent } from './profile-analysis/profile-card/profile-card/profile-analysis.component';
import { ProfileResoucersComponent } from './profile-resources/profile-resources.component';
import { NetworkComponent } from './network/network.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    ToolbarComponent,
    ProfileCardComponent,
    AnnouncementComponent,
    ProfileLocalizationComponent,
    ProfileAnalysisComponent,
    ProfileResoucersComponent,
    NetworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
