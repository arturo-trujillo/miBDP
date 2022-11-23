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
import { MoviePageComponent } from './Pages/movie-page/movie-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SanitizeHtmlPipe } from './Services/sanitizing';
import { MovieCardComponent } from './Components/movie-card/movie-card.component';
import { MovieSidenavComponent } from './Components/movie-sidenav/movie-sidenav.component';
import { MovieCommentsSecctionComponent } from './Components/movie-comments-secction/movie-comments-secction.component';
import { MovieCommentsComponent } from './Components/movie-comments/movie-comments.component';
import { MovieMainAreaComponent } from './Components/movie-main-area/movie-main-area.component';
import { CommentComponent } from './Components/comment/comment.component';
import { CommentCreateModalComponent } from './Components/comment-create-modal/comment-create-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { CatalogComponent } from './Pages/catalog/catalog.component';
import { CatSidenavComponent } from './Components/cat-sidenav/cat-sidenav.component';
import { CatMainAreaComponent } from './Components/cat-main-area/cat-main-area.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SidenavCompComponent,
    RightsidenavCompComponent,
    RecomendationsAreaComponent,
    MainMovieAreaComponent,
    MoviePageComponent,
    SanitizeHtmlPipe,
    MovieCardComponent,
    MovieSidenavComponent,
    MovieCommentsSecctionComponent,
    MovieCommentsComponent,
    MovieMainAreaComponent,
    CommentComponent,
    CommentCreateModalComponent,
    SearchResultComponent,
    CatalogComponent,
    CatSidenavComponent,
    CatMainAreaComponent
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
    MatCardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
