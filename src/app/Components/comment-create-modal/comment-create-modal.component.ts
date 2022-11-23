import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentsService } from 'src/app/Services/comments.service';
@Component({
  selector: 'app-comment-create-modal',
  templateUrl: './comment-create-modal.component.html',
  styleUrls: ['./comment-create-modal.component.scss']
})
export class CommentCreateModalComponent implements OnInit {
  a:any
  commentForm = new FormGroup({
    author :  new FormControl(''),
    rating : new FormControl(''),
    description : new FormControl('')

  })

  // model = new Comment( 'Autor', 'Description', 4);
  constructor(private commentServ: CommentsService) { }

  
  ngOnInit(): void {
  }

  // newComment(){
  //   this.model = new Comment('','',);
  // }
  // submitted = false;
  
   onSubmit() { 
    
    let comment = {
      Author: this.commentForm.value.author,
      Description: this.commentForm.value.description,
      Rating: Number(this.getRating()),
      idMovie: this.getId()
    }

    this.commentServ.postComment(comment);
  }

  getRating(){  
   return (document.querySelector('div.stars-comment-creates input[name="rate"]:checked') as HTMLInputElement).value;
  }



  getId(){
    return  (new URLSearchParams(window. location. search)).get('id')
  }
}
