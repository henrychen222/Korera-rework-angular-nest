import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  visible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  openSidebar(): void {
    this.visible = true;
  }

  closeSideBar(): void {
    this.visible = false;
  }

}
