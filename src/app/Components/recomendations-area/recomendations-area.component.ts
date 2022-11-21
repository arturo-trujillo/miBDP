import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-recomendations-area',
  templateUrl: './recomendations-area.component.html',
  styleUrls: ['./recomendations-area.component.scss']
})
export class RecomendationsAreaComponent implements OnInit {

 recomendedMovies:any;
 recSec1:any
 recSec2:any
 recSec3:any


  constructor( private movieServ: MoviesService) {
    this.movieServ.movies.subscribe( elem =>{
      this.recomendedMovies = elem.slice(-15);
      this.recSec1 = this.recomendedMovies.slice(0,5);
      this.recSec2 = this.recomendedMovies.slice(5,10);
      this.recSec3 = this.recomendedMovies.slice(10,15);
    })
   }

  ngOnInit(): void {
  }

  gotoMovie(movie:any){
    let link = '/movie?id=';  
    window.location.href = link.concat(movie.idMovie);
  }

}
