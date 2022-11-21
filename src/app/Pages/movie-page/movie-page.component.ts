import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {



movie:any

  constructor(private movieServ : MoviesService) {

   }

  ngOnInit(): void {  
  }

}
