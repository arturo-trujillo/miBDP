import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpMeComponent } from '../help-me/help-me.component';
import { AboutMeComponent } from '../about-me/about-me.component';
@Component({
  selector: 'app-sidenav-comp',
  templateUrl: './sidenav-comp.component.html',
  styleUrls: ['./sidenav-comp.component.scss']
})
export class SidenavCompComponent implements OnInit {

  @Input() bestMovie: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  showFiller = false;


  help(){
    const dialogRef = this.dialog.open(HelpMeComponent);
  }

  aboutMe(){
    const dialogRef = this.dialog.open(AboutMeComponent);
  }
}
