import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { ClassementComponent } from './classement/classement.component';
import { NouvellesComponent } from './nouvelles/nouvelles.component';
import { LiveFootballComponent } from './live-football/live-football.component';
import { HeaderComponent } from './header/header.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule} from '@angular/cdk/menu';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    TableauDeBordComponent,
    ClassementComponent,
    NouvellesComponent,
    LiveFootballComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
