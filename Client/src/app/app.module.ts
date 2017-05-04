import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// Import Components
import { AppComponent } from './app.component';
import { HeroComponent } from './Components/hero/hero.component';
import { ArticleCardComponent } from './Components/article-card/article-card.component';
import { ArticlePageComponent } from './Components/article-page/article-page.component';
import { ArticlesComponent } from './Components/articles/articles.component';
import { NavBurgerComponent } from './Components/nav-burger/nav-burger.component';
import { ArticleSearchComponent } from './Components/article-search/article-search.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';

// Import Services
import { ArticleService } from './Services/article.service';
import { ValidateService } from './Services/validate.service';
import { AuthService } from './Services/auth.service';




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
    HeroComponent,
    ArticleCardComponent,
    ArticlePageComponent,
    ArticlesComponent,
    NavBurgerComponent,
    ArticleSearchComponent,
    RegisterComponent,
    LoginComponent
  ],

  providers: [ ArticleService, ValidateService, AuthService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
