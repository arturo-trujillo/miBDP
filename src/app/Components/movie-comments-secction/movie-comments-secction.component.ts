import { Component, OnInit, Inject } from '@angular/core';
import { CommentsService } from 'src/app/Services/comments.service';
import {MatDialog} from '@angular/material/dialog';
import { CommentCreateModalComponent } from '../comment-create-modal/comment-create-modal.component';
@Component({
  selector: 'app-movie-comments-secction',
  templateUrl: './movie-comments-secction.component.html',
  styleUrls: ['./movie-comments-secction.component.scss']
})
export class MovieCommentsSecctionComponent implements OnInit {
  value = '';
  comments:any;
  filteredComments: string[] = [];
  movies: any;
  recentMovies:any;
  item:any

  constructor(private commentsServ: CommentsService, private dialog:MatDialog) {  this.commentsServ.comments.subscribe( elem =>{
    
    this.comments = elem
    this.filterComments(new URLSearchParams(window.location.search).get('id'))
  }) }

  ngOnInit(): void {
  }

  filterComments(idMovie:any){
    this.comments.forEach((element:any) => {
      if(element.idMovie == idMovie){
        this.filteredComments.push(element);
      }
    });

    console.log(this.filteredComments);
  }

  createComment(){
    const dialogRef = this.dialog.open(CommentCreateModalComponent, {
      panelClass: 'comment-modal'
    });
  }
}
