import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './Pages/movie-page/movie-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { CatalogComponent } from './Pages/catalog/catalog.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'movie', component: MoviePageComponent},
{ path: 'catalogue', component: CatalogComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
