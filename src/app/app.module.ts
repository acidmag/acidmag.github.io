import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { HeroComponent } from './hero/hero.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService }          from './article.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    ButtonComponent,
    InputBarComponent,
    HeroComponent,
    ArticleCardComponent,
    ArticlePageComponent,
    ArticlesComponent
  ],

  providers: [ ArticleService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
