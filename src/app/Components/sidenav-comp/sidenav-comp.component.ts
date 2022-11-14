import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-comp',
  templateUrl: './sidenav-comp.component.html',
  styleUrls: ['./sidenav-comp.component.scss']
})
export class SidenavCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;
}
