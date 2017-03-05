import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { HeroComponent } from './hero/hero.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlesComponent } from './articles/articles.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputBarComponent,
    HeroComponent,
    ArticleCardComponent,
    ArticlePageComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ArticlesComponent
      },
      {
        path: 'articles',
        component: ArticlesComponent
      },
      {
        path: 'article/:id',
        component: ArticlePageComponent
      }


])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
