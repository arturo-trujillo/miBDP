import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightsidenav-comp',
  templateUrl: './rightsidenav-comp.component.html',
  styleUrls: ['./rightsidenav-comp.component.scss']
})
export class RightsidenavCompComponent implements OnInit {
  value = '';

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor() { }
 
  ngOnInit(): void {
  }

}
