import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-burger',
  templateUrl: './nav-burger.component.html',
  styleUrls: ['./nav-burger.component.css']
})
export class NavBurgerComponent implements OnInit {

  constructor() { }

  clicked = false;

  ngOnInit() {
  }

  buttonClicked(): void {
    console.log('clicked');
    this.clicked = !this.clicked;
  }

}
