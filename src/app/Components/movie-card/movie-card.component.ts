import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  htmlstring2:any
  @Input() item:any;
  constructor() { }

  ngOnInit(): void {
    let n = this.item.Rating;
    switch(n){
      case 1:
         this.htmlstring2 = `
         <input class="star star-5" id="star-5" type="radio" name="star" disabled/>
         <label class="star star-5" for="star-5"></label>
         <input class="star star-4" id="star-4" type="radio" name="star"disabled/>
         <label class="star star-4" for="star-4"></label>
         <input class="star star-3" id="star-3" type="radio" name="star"disabled />
         <label class="star star-3" for="star-3"></label>
         <input class="star star-2" id="star-2" type="radio" name="star"disabled />
         <label class="star star-2" for="star-2"></label>
         <input class="star star-1" id="star-1" type="radio" name="star" disabled  checked/>
         <label class="star star-1" for="star-1"></label>
         `;
         break;
      case 2:
        this.htmlstring2 = `
        <input class="star star-5" id="star-5" type="radio" name="star" disabled/>
        <label class="star star-5" for="star-5"></label>
        <input class="star star-4" id="star-4" type="radio" name="star"disabled />
        <label class="star star-4" for="star-4"></label>
        <input class="star star-3" id="star-3" type="radio" name="star"disabled />
        <label class="star star-3" for="star-3"></label>
        <input class="star star-2" id="star-2" type="radio" name="star"disabled checked/>
        <label class="star star-2" for="star-2"></label>
        <input class="star star-1" id="star-1" type="radio" name="star" disabled />
        <label class="star star-1" for="star-1"></label>
        `;
        break;
      case 3:
        this.htmlstring2 = `
        <input class="star star-5" id="star-5" type="radio" name="star" disabled/>
        <label class="star star-5" for="star-5"></label>
        <input class="star star-4" id="star-4" type="radio" name="star"disabled />
        <label class="star star-4" for="star-4"></label>
        <input class="star star-3" id="star-3" type="radio" name="star"disabled checked/>
        <label class="star star-3" for="star-3"></label>
        <input class="star star-2" id="star-2" type="radio" name="star"disabled />
        <label class="star star-2" for="star-2"></label>
        <input class="star star-1" id="star-1" type="radio" name="star" disabled />
        <label class="star star-1" for="star-1"></label>
        `;
        break;
      case 4:
        this.htmlstring2 = `
            <input class="star star-5" id="star-5" type="radio" name="star" disabled/>
            <label class="star star-5" for="star-5"></label>
            <input class="star star-4" id="star-4" type="radio" name="star"disabled checked/>
            <label class="star star-4" for="star-4"></label>
            <input class="star star-3" id="star-3" type="radio" name="star"disabled />
            <label class="star star-3" for="star-3"></label>
            <input class="star star-2" id="star-2" type="radio" name="star"disabled />
            <label class="star star-2" for="star-2"></label>
            <input class="star star-1" id="star-1" type="radio" name="star" disabled />
            <label class="star star-1" for="star-1"></label>
            `;
        break;
      case 5:
        this.htmlstring2 = `
        <input class="star star-5" id="star-5" type="radio" name="star" disabled checked/>
        <label class="star star-5" for="star-5"></label>
        <input class="star star-4" id="star-4" type="radio" name="star"disabled />
        <label class="star star-4" for="star-4"></label>
        <input class="star star-3" id="star-3" type="radio" name="star"disabled />
        <label class="star star-3" for="star-3"></label>
        <input class="star star-2" id="star-2" type="radio" name="star"disabled />
        <label class="star star-2" for="star-2"></label>
        <input class="star star-1" id="star-1" type="radio" name="star" disabled />
        <label class="star star-1" for="star-1"></label>
        `;
        break;


    }
  }


  gotoMovie(movie:any){
    let link = '/movie?id=';  
    window.location.href = link.concat(movie.idMovie);
  }
}
