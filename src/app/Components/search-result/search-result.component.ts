import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  

  constructor(@Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit(): void {
    //console.log(this.data)
  }

}
