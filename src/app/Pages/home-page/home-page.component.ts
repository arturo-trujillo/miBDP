import { Component, OnInit } from '@angular/core';

import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  movies:any;
  bestMovie:any;

  constructor(private  moviesServ: MoviesService) {

   }

  ngOnInit(): void {
    this.moviesServ.movies.subscribe(elem =>{
      this.movies = elem;
      this.bestMovie = this.movies[0];
      console.log(this.bestMovie);
    });
  }

}
