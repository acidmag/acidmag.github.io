import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SubmitPageComponent } from './submit/submit-page.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'submit', component: SubmitPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
