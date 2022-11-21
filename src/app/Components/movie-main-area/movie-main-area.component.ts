import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-movie-main-area',
  templateUrl: './movie-main-area.component.html',
  styleUrls: ['./movie-main-area.component.scss']
})
export class MovieMainAreaComponent implements OnInit {
  htmlstring:any
  movie:any
  constructor(private movieServ : MoviesService) { 
    this.movieServ.movies.subscribe( elem => {
      const params = new URLSearchParams(window. location. search)
      this.movie = elem.find((elem:any) => elem.idMovie == params.get('id'));


      switch(this.movie.Rating){
        case 1:
           this.htmlstring = `
           <input class="star-movie-page star-movie-page-5" id="star-movie-page-5" type="radio" name="star-movie-page" disabled/>
           <label class="star-movie-page star-movie-page-5" for="star-movie-page-5"></label>
           <input class="star-movie-page star-movie-page-4" id="star-movie-page-4" type="radio" name="star-movie-page"disabled/>
           <label class="star-movie-page star-movie-page-4" for="star-movie-page-4"></label>
           <input class="star-movie-page star-movie-page-3" id="star-movie-page-3" type="radio" name="star-movie-page"disabled />
           <label class="star-movie-page star-movie-page-3" for="star-movie-page-3"></label>
           <input class="star-movie-page star-movie-page-2" id="star-movie-page-2" type="radio" name="star-movie-page"disabled />
           <label class="star-movie-page star-movie-page-2" for="star-movie-page-2"></label>
           <input class="star-movie-page star-movie-page-1" id="star-movie-page-1" type="radio" name="star-movie-page" disabled  checked/>
           <label class="star-movie-page star-movie-page-1" for="star-movie-page-1"></label>
           `;
           break;
        case 2:
          this.htmlstring = `
          <input class="star-movie-page star-movie-page-5" id="star-movie-page-5" type="radio" name="star-movie-page" disabled/>
          <label class="star-movie-page star-movie-page-5" for="star-movie-page-5"></label>
          <input class="star-movie-page star-movie-page-4" id="star-movie-page-4" type="radio" name="star-movie-page"disabled />
          <label class="star-movie-page star-movie-page-4" for="star-movie-page-4"></label>
          <input class="star-movie-page star-movie-page-3" id="star-movie-page-3" type="radio" name="star-movie-page"disabled />
          <label class="star-movie-page star-movie-page-3" for="star-movie-page-3"></label>
          <input class="star-movie-page star-movie-page-2" id="star-movie-page-2" type="radio" name="star-movie-page"disabled checked/>
          <label class="star-movie-page star-movie-page-2" for="star-movie-page-2"></label>
          <input class="star-movie-page star-movie-page-1" id="star-movie-page-1" type="radio" name="star-movie-page" disabled />
          <label class="star-movie-page star-movie-page-1" for="star-movie-page-1"></label>
          `;
          break;
        case 3:
          this.htmlstring = `
          <input class="star-movie-page star-movie-page-5" id="star-movie-page-5" type="radio" name="star-movie-page" disabled/>
          <label class="star-movie-page star-movie-page-5" for="star-movie-page-5"></label>
          <input class="star-movie-page star-movie-page-4" id="star-movie-page-4" type="radio" name="star-movie-page"disabled />
          <label class="star-movie-page star-movie-page-4" for="star-movie-page-4"></label>
          <input class="star-movie-page star-movie-page-3" id="star-movie-page-3" type="radio" name="star-movie-page"disabled checked/>
          <label class="star-movie-page star-movie-page-3" for="star-movie-page-3"></label>
          <input class="star-movie-page star-movie-page-2" id="star-movie-page-2" type="radio" name="star-movie-page"disabled />
          <label class="star-movie-page star-movie-page-2" for="star-movie-page-2"></label>
          <input class="star-movie-page star-movie-page-1" id="star-movie-page-1" type="radio" name="star-movie-page" disabled />
          <label class="star-movie-page star-movie-page-1" for="star-movie-page-1"></label>
          `;
          break;
        case 4:
          this.htmlstring = `
              <input class="star-movie-page star-movie-page-5" id="star-movie-page-5" type="radio" name="star-movie-page" disabled/>
              <label class="star-movie-page star-movie-page-5" for="star-movie-page-5"></label>
              <input class="star-movie-page star-movie-page-4" id="star-movie-page-4" type="radio" name="star-movie-page"disabled checked/>
              <label class="star-movie-page star-movie-page-4" for="star-movie-page-4"></label>
              <input class="star-movie-page star-movie-page-3" id="star-movie-page-3" type="radio" name="star-movie-page"disabled />
              <label class="star-movie-page star-movie-page-3" for="star-movie-page-3"></label>
              <input class="star-movie-page star-movie-page-2" id="star-movie-page-2" type="radio" name="star-movie-page"disabled />
              <label class="star-movie-page star-movie-page-2" for="star-movie-page-2"></label>
              <input class="star-movie-page star-movie-page-1" id="star-movie-page-1" type="radio" name="star-movie-page" disabled />
              <label class="star-movie-page star-movie-page-1" for="star-movie-page-1"></label>
              `;
          break;
        case 5:
          this.htmlstring = `
          <input class="star-movie-page star-movie-page-5" id="star-movie-page-5" type="radio" name="star-movie-page" disabled checked/>
          <label class="star-movie-page star-movie-page-5" for="star-movie-page-5"></label>
          <input class="star-movie-page star-movie-page-4" id="star-movie-page-4" type="radio" name="star-movie-page"disabled />
          <label class="star-movie-page star-movie-page-4" for="star-movie-page-4"></label>
          <input class="star-movie-page star-movie-page-3" id="star-movie-page-3" type="radio" name="star-movie-page"disabled />
          <label class="star-movie-page star-movie-page-3" for="star-movie-page-3"></label>
          <input class="star-movie-page star-movie-page-2" id="star-movie-page-2" type="radio" name="star-movie-page"disabled />
          <label class="star-movie-page star-movie-page-2" for="star-movie-page-2"></label>
          <input class="star-movie-page star-movie-page-1" id="star-movie-page-1" type="radio" name="star-movie-page" disabled />
          <label class="star-movie-page star-movie-page-1" for="star-movie-page-1"></label>
          `;
          break;
  
  
      }
    })
  }


  
  ngOnInit(): void {
    
  }

}
