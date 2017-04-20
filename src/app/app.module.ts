import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { HeroComponent } from './hero/hero.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService }          from './article.service';
import { NavBurgerComponent } from './nav-burger/nav-burger.component';
import { ArticleSearchComponent } from './article-search/article-search.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 }),
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    ButtonComponent,
    InputBarComponent,
    HeroComponent,
    ArticleCardComponent,
    ArticlePageComponent,
    ArticlesComponent,
    NavBurgerComponent,
    ArticleSearchComponent
  ],

  providers: [ ArticleService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
