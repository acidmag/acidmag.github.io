import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  fullImagePath: string;

  constructor() {
      this.fullImagePath = '/assets/images/acid.png'
  }

  ngOnInit() {
  }

}
