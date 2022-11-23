import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';
import { MatDialog } from '@angular/material/dialog';
import { SearchResultComponent } from '../search-result/search-result.component';
@Component({
  selector: 'app-cat-main-area',
  templateUrl: './cat-main-area.component.html',
  styleUrls: ['./cat-main-area.component.scss']
})
export class CatMainAreaComponent implements OnInit {
  value = '';
  searchResults: string[] = [];

  movies:any
  cat1: string[] = [];
  cat2: string[] = [];
  cat3: string[] = [];

  cat1_1: any;
  cat1_2: any;
  cat1_3: any;

  cat2_1: any;
  cat2_2: any;
  cat2_3: any;


  cat3_1: any;
  cat3_2: any;
  cat3_3: any;


  constructor(private moviesServ: MoviesService, private dialog:MatDialog) {
    this.moviesServ.movies.subscribe( elem =>{
      this.movies = elem
      elem.forEach( (element:any) => {
        switch (element.Category){
          case 'Terror':
            this.cat1.push(element);
            break;
          case 'Familiar':
            this.cat2.push(element);
            break;
          case 'Accion':
            this.cat3.push(element);

            break;
        }
        
      });

      this.cat1_1 = this.cat1.slice(0,5)
      this.cat1_2 = this.cat1.slice(5,10)
      this.cat1_3 = this.cat1.slice(10,15)


      this.cat2_1 = this.cat2.slice(0,5)
      this.cat2_2 = this.cat2.slice(5,10)
      this.cat2_3 = this.cat2.slice(10,15)


      this.cat3_1 = this.cat3.slice(0,5)
      this.cat3_2 = this.cat3.slice(5,10)
      this.cat3_3 = this.cat3.slice(10,15)
    });




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


  gotoMovie(movie:any){
    let link = '/movie?id=';  
    window.location.href = link.concat(movie.idMovie);
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


// Terror Familiar y Accion