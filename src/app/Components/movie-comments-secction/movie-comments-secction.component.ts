import { Component, OnInit, Inject } from '@angular/core';
import { CommentsService } from 'src/app/Services/comments.service';
import {MatDialog} from '@angular/material/dialog';
import { CommentCreateModalComponent } from '../comment-create-modal/comment-create-modal.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { MoviesService } from 'src/app/Services/movies.service';
import { pipe } from 'rxjs';
import { take } from 'rxjs';
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
  searchResults: string[] = [];

  constructor(private commentsServ: CommentsService, private dialog:MatDialog, private movieServ: MoviesService) {  
    this.commentsServ.comments.subscribe( elem =>{
    this.comments = elem
    this.filterComments(new URLSearchParams(window.location.search).get('id'))
  })

  this.movieServ.movies.subscribe(elem =>{
    this.movies = elem
  })
}

  ngOnInit(): void {

    var input = document.getElementById('search-bar-input');
    input?.addEventListener('keypress', function(event){
      if(event.key == 'Enter'){
        
        event.preventDefault();
        document.getElementById('search-button')?.click();
        
      }
    })

  }

  filterComments(idMovie:any){
    this.filteredComments = [];
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

  search(){
    console.log(this.movies)
    this.movies.forEach( (element:any) => {
      if (element.Title.includes(this.value)){
        //console.log(element)
        this.searchResults.push(element);
      }
      
    });
    //console.log(this.searchResults)
    const dialogRef = this.dialog.open(SearchResultComponent, {
      data: this.searchResults
    });

  }
}
