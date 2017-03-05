import { Component, Input, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  constructor(
      private articleService: ArticleService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

  ngOnInit() {
  }

  articles: Articles;

  article = {
      id: '',
      title: "Article 4",
      tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Author 4",
      dateCreated: "03/02/2017",
      article: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar odio justo, ut tempus orci dapibus at. Donec non ex quis elit varius euismod dignissim in turpis. Duis elementum felis sed porttitor vestibulum. Mauris ullamcorper eu magna dapibus semper. Integer vel tincidunt metus. Suspendisse vestibulum pulvinar leo, quis molestie lectus pharetra ac. Cras scelerisque egestas urna, eget condimentum mi vulputate id. Quisque vel ex sed nisi scelerisque dapibus. Phasellus in velit lorem. Nullam fermentum massa felis.

          Vivamus nisl eros, sagittis sed mollis eget, rutrum sed turpis. Vivamus sapien ante, posuere vitae sagittis quis, elementum id nulla. Phasellus lacinia elit eget commodo sagittis. Nam fringilla et neque non finibus. Pellentesque elementum sodales nisl in vulputate. Proin molestie ornare dolor a tincidunt. In non odio vel turpis semper porta ac ac orci. Aenean quis mi quis sem eleifend dignissim. Nullam suscipit ullamcorper urna quis blandit. Nulla sit amet metus turpis.

          Morbi in auctor odio, id accumsan libero. Donec nec elit non sem malesuada commodo quis eu diam. Cras dictum efficitur urna non congue. In scelerisque sem nec commodo congue. Duis a neque turpis. Aenean dapibus, sem eget mattis porttitor, magna velit aliquet ante, id cursus sem ex at tellus. Aliquam varius, diam ac consectetur viverra, elit nisl hendrerit lectus, nec rutrum felis mauris non odio. Aliquam eget felis finibus, mattis sem quis, blandit massa. Aliquam nec libero ac erat accumsan consequat. Proin lacinia, magna eu tristique gravida, tortor orci tempus sapien, sed fermentum erat arcu eget odio. Donec et dapibus magna, non aliquet velit. Aenean ac augue sed odio tristique suscipit. In vehicula ultricies arcu id eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

          Maecenas sit amet volutpat mi. Curabitur fermentum, felis vel molestie dignissim, nunc ligula iaculis lectus, eget fermentum ipsum odio quis mi. Mauris id magna sed diam gravida posuere. Cras eget mi ut elit commodo lacinia. Nunc ac nibh vel libero pharetra molestie. In tincidunt ornare dui in consectetur. Donec in dui orci. Maecenas consequat sollicitudin nunc, ac rhoncus mauris ultricies in. Aenean fermentum odio nunc, eu tincidunt quam condimentum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lacus ac tellus lacinia accumsan id ac dolor. Donec cursus, ligula nec mollis condimentum, ligula diam tristique leo, ac faucibus ligula magna sed neque. Pellentesque a ipsum aliquam, posuere mauris tincidunt, bibendum nisl. Quisque augue sem, laoreet sit amet nisi vestibulum, rutrum accumsan quam. Donec quis aliquet mi. Curabitur eleifend sit amet neque id bibendum.

          Etiam sollicitudin vitae lectus vel interdum. Nulla in mauris eu nulla accumsan rhoncus. Pellentesque molestie mi ut dignissim convallis. Duis volutpat odio vel nulla cursus, id semper nulla elementum. Vivamus dapibus ligula at neque gravida, eget auctor urna fringilla. Aenean sed libero quis eros sagittis rhoncus id ac lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a vehicula risus. Nullam est erat, dictum sed tellus sit amet, ornare imperdiet nunc.

      `
  };


}
