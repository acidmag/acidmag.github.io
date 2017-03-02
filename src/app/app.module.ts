import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { HeroComponent } from './hero/hero.component';
import { ArticleCardComponent } from './article-card/article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputBarComponent,
    HeroComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
