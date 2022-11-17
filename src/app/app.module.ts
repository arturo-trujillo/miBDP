import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SidenavCompComponent } from './Components/sidenav-comp/sidenav-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RightsidenavCompComponent } from './Components/rightsidenav-comp/rightsidenav-comp.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RecomendationsAreaComponent } from './Components/recomendations-area/recomendations-area.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MainMovieAreaComponent } from './Components/main-movie-area/main-movie-area.component';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SidenavCompComponent,
    RightsidenavCompComponent,
    RecomendationsAreaComponent,
    MainMovieAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
