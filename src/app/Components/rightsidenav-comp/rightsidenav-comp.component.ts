import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';
import { SearchResultComponent } from '../search-result/search-result.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectorMatcher } from '@angular/compiler';
@Component({
  selector: 'app-rightsidenav-comp',
  templateUrl: './rightsidenav-comp.component.html',
  styleUrls: ['./rightsidenav-comp.component.scss']
})
export class RightsidenavCompComponent implements OnInit {
  value = '';

  movies: any;
  recentMovies:any;
  searchResults: string[] = [];


  constructor( private movieServ: MoviesService, private dialog: MatDialog) {
   
    this.movieServ.movies.subscribe(elem =>{
      this.movies = elem
      this.recentMovies = this.movies.slice(-7);
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


 


  search(){
    //console.log(this.movies)
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
