import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuIcon: boolean = false;
  showMenuItems: string = 'hidden';

  constructor() {}

  ngOnInit(): void {}

  clickMenuIcon() {
    this.menuIcon = !this.menuIcon;
  }
}
