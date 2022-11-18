import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-main-movie-area',
  templateUrl: './main-movie-area.component.html',
  styleUrls: ['./main-movie-area.component.scss'],
  
})
export class MainMovieAreaComponent implements OnInit {
  slideIndex:any
  htmlstring:any
  bestMovie: any;
  
  constructor(private movieServ :MoviesService) {
    this.movieServ.movies.subscribe(elem =>{
      this.bestMovie = elem[ Math.floor(Math.random() * elem.length)];

      let n = this.bestMovie.Rating;

    switch(n){
      case 1:
         this.htmlstring = `
         <input class="star-mini star-mini-5" id="star-mini-5" type="radio" name="star-mini" disabled/>
         <label class="star-mini star-mini-5" for="star-mini-5"></label>
         <input class="star-mini star-mini-4" id="star-mini-4" type="radio" name="star-mini"disabled/>
         <label class="star-mini star-mini-4" for="star-mini-4"></label>
         <input class="star-mini star-mini-3" id="star-mini-3" type="radio" name="star-mini"disabled />
         <label class="star-mini star-mini-3" for="star-mini-3"></label>
         <input class="star-mini star-mini-2" id="star-mini-2" type="radio" name="star-mini"disabled />
         <label class="star-mini star-mini-2" for="star-mini-2"></label>
         <input class="star-mini star-mini-1" id="star-mini-1" type="radio" name="star-mini" disabled  checked/>
         <label class="star-mini star-mini-1" for="star-mini-1"></label>
         `;
         break;
      case 2:
        this.htmlstring = `
        <input class="star-mini star-mini-5" id="star-mini-5" type="radio" name="star-mini" disabled/>
        <label class="star-mini star-mini-5" for="star-mini-5"></label>
        <input class="star-mini star-mini-4" id="star-mini-4" type="radio" name="star-mini"disabled />
        <label class="star-mini star-mini-4" for="star-mini-4"></label>
        <input class="star-mini star-mini-3" id="star-mini-3" type="radio" name="star-mini"disabled />
        <label class="star-mini star-mini-3" for="star-mini-3"></label>
        <input class="star-mini star-mini-2" id="star-mini-2" type="radio" name="star-mini"disabled checked/>
        <label class="star-mini star-mini-2" for="star-mini-2"></label>
        <input class="star-mini star-mini-1" id="star-mini-1" type="radio" name="star-mini" disabled />
        <label class="star-mini star-mini-1" for="star-mini-1"></label>
        `;
        break;
      case 3:
        this.htmlstring = `
        <input class="star-mini star-mini-5" id="star-mini-5" type="radio" name="star-mini" disabled/>
        <label class="star-mini star-mini-5" for="star-mini-5"></label>
        <input class="star-mini star-mini-4" id="star-mini-4" type="radio" name="star-mini"disabled />
        <label class="star-mini star-mini-4" for="star-mini-4"></label>
        <input class="star-mini star-mini-3" id="star-mini-3" type="radio" name="star-mini"disabled checked/>
        <label class="star-mini star-mini-3" for="star-mini-3"></label>
        <input class="star-mini star-mini-2" id="star-mini-2" type="radio" name="star-mini"disabled />
        <label class="star-mini star-mini-2" for="star-mini-2"></label>
        <input class="star-mini star-mini-1" id="star-mini-1" type="radio" name="star-mini" disabled />
        <label class="star-mini star-mini-1" for="star-mini-1"></label>
        `;
        break;
      case 4:
        this.htmlstring = `
            <input class="star-mini star-mini-5" id="star-mini-5" type="radio" name="star-mini" disabled/>
            <label class="star-mini star-mini-5" for="star-mini-5"></label>
            <input class="star-mini star-mini-4" id="star-mini-4" type="radio" name="star-mini"disabled checked/>
            <label class="star-mini star-mini-4" for="star-mini-4"></label>
            <input class="star-mini star-mini-3" id="star-mini-3" type="radio" name="star-mini"disabled />
            <label class="star-mini star-mini-3" for="star-mini-3"></label>
            <input class="star-mini star-mini-2" id="star-mini-2" type="radio" name="star-mini"disabled />
            <label class="star-mini star-mini-2" for="star-mini-2"></label>
            <input class="star-mini star-mini-1" id="star-mini-1" type="radio" name="star-mini" disabled />
            <label class="star-mini star-mini-1" for="star-mini-1"></label>
            `;
        break;
      case 5:
        this.htmlstring = `
        <input class="star-mini star-mini-5" id="star-mini-5" type="radio" name="star-mini" disabled checked/>
        <label class="star-mini star-mini-5" for="star-mini-5"></label>
        <input class="star-mini star-mini-4" id="star-mini-4" type="radio" name="star-mini"disabled />
        <label class="star-mini star-mini-4" for="star-mini-4"></label>
        <input class="star-mini star-mini-3" id="star-mini-3" type="radio" name="star-mini"disabled />
        <label class="star-mini star-mini-3" for="star-mini-3"></label>
        <input class="star-mini star-mini-2" id="star-mini-2" type="radio" name="star-mini"disabled />
        <label class="star-mini star-mini-2" for="star-mini-2"></label>
        <input class="star-mini star-mini-1" id="star-mini-1" type="radio" name="star-mini" disabled />
        <label class="star-mini star-mini-1" for="star-mini-1"></label>
        `;
        break;


    }

    })    

   }


  ngOnInit(): void {

   
  }
  gotoMovie(){
    let link = '/movie?id=';  
    window.location.href = link.concat(this.bestMovie.idMovie);
  }
}

