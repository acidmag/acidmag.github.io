import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  bannerImagePath: string;
  backgroundImagePath: string;
  logoImagePath: string;

  constructor() {
      this.bannerImagePath = '/assets/images/Homepage_Acid collage.png';
      this.backgroundImagePath = '/assets/images/Homepage_Glitch effect.png';
      this.logoImagePath = '/assets/images/Homepage_Logo.png';
  }

  ngOnInit() {
  }

}
