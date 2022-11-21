import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-comments-secction',
  templateUrl: './movie-comments-secction.component.html',
  styleUrls: ['./movie-comments-secction.component.scss']
})
export class MovieCommentsSecctionComponent implements OnInit {
  value = '';

  movies: any;
  recentMovies:any;

  constructor() { }

  ngOnInit(): void {
  }

}
