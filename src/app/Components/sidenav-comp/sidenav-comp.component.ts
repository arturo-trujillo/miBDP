import { Component, OnInit, Inject, Input } from '@angular/core';


@Component({
  selector: 'app-sidenav-comp',
  templateUrl: './sidenav-comp.component.html',
  styleUrls: ['./sidenav-comp.component.scss']
})
export class SidenavCompComponent implements OnInit {

  @Input() bestMovie: any;
  constructor() { }

  ngOnInit(): void {
  }
  showFiller = false;
}
