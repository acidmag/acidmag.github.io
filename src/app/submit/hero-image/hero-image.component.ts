import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'acid-hero-image',
    templateUrl: './hero-image.component.html',
    styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    uploadImage() {
        window.alert('dude you just clicked me');
    }
}
