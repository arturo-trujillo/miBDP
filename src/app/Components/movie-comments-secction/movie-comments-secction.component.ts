import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/Services/comments.service';

@Component({
  selector: 'app-movie-comments-secction',
  templateUrl: './movie-comments-secction.component.html',
  styleUrls: ['./movie-comments-secction.component.scss']
})
export class MovieCommentsSecctionComponent implements OnInit {
  value = '';
  comments:any
  movies: any;
  recentMovies:any;

  constructor(private commentsServ: CommentsService) {  this.commentsServ.comments.subscribe( elem =>{
    this.comments = elem
  }) }

  ngOnInit(): void {
  }

}
