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

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    ToolbarComponent,
    ProfileCardComponent,
    AnnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
