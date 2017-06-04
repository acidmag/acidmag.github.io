import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-burger',
  templateUrl: './nav-burger.component.html',
  styleUrls: ['./nav-burger.component.css']
})
export class NavBurgerComponent implements OnInit {

  clicked: boolean;

  constructor() {
    this.clicked = false;
  }

  ngOnInit() {
  }

  buttonClicked(): void {
    this.clicked = !this.clicked;
  }

}
