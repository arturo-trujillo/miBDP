import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-rightsidenav-comp',
  templateUrl: './rightsidenav-comp.component.html',
  styleUrls: ['./rightsidenav-comp.component.scss']
})
export class RightsidenavCompComponent implements OnInit {
  value = '';

  movies: any;
  recentMovies:any;


  constructor( private movieServ: MoviesService) {
   
    this.movieServ.movies.subscribe(elem =>{
      this.movies = elem
      this.recentMovies = this.movies.slice(-7);
    })
   }
 
  ngOnInit(): void {
  }

}
