import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  topImagePath: string;
  aboutUsImage: string;

  constructor() {
      this.topImagePath = '/assets/images/Homepage_Acid collage.png';
      this.aboutUsImage = '/assets/images/aboutUs.png';
  }

  ngOnInit() {
  }

}
