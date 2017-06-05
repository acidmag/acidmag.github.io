webpackJsonp([1,4],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ARTICLES } from './mock-articles'
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.articlesUrl = 'api/articles'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ArticleService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    // Get all articles
    ArticleService.prototype.getArticles = function () {
        return this.http.get(this.articlesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ArticleService.prototype.getArticlesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getArticles()); }, 500);
        });
    };
    // Get article by ID
    ArticleService.prototype.getArticle = function (id) {
        var url = this.articlesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // Update Article
    ArticleService.prototype.update = function (articles) {
        var url = this.articlesUrl + "/" + articles.id;
        return this.http
            .put(url, JSON.stringify(articles), { headers: this.headers })
            .toPromise()
            .then(function () { return articles; })
            .catch(this.handleError);
    };
    // Create an article
    ArticleService.prototype.create = function (article) {
        return this.http
            .post(this.articlesUrl, JSON.stringify(article), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Delete an article
    ArticleService.prototype.delete = function (id) {
        var url = this.articlesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ArticleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ArticleService);
    return ArticleService;
    var _a;
}());
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_service__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlePageComponent = (function () {
    function ArticlePageComponent(articleService, route, location) {
        this.articleService = articleService;
        this.route = route;
        this.location = location;
    }
    ArticlePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.articleService.getArticle(+params['id']); })
            .subscribe(function (articles) { return _this.articles = articles; });
    };
    ArticlePageComponent.prototype.goBack = function () {
        this.location.back();
    };
    ArticlePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Component */])({
            selector: 'article-page',
            template: __webpack_require__(537),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* Location */]) === 'function' && _c) || Object])
    ], ArticlePageComponent);
    return ArticlePageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=article-page.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_service__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticlesComponent = (function () {
    function ArticlesComponent(router, articleService) {
        this.router = router;
        this.articleService = articleService;
    }
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticles()
            .then(function (articles) { return _this.articles = articles; });
    };
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticlesComponent.prototype.onSelect = function (articles) {
        this.selectedArticle = articles;
    };
    ArticlesComponent.prototype.gotoArticle = function () {
        this.router.navigate(['/article', this.selectedArticle.id]);
    };
    ArticlesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'articles',
            template: __webpack_require__(539),
            styles: [__webpack_require__(529)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__article_service__["a" /* ArticleService */]) === 'function' && _b) || Object])
    ], ArticlesComponent);
    return ArticlesComponent;
    var _a, _b;
}());
//# sourceMappingURL=articles.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 340;


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(469);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_page_article_page_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_articles_component__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__articles_articles_component__["a" /* ArticlesComponent */] },
    { path: 'articles', component: __WEBPACK_IMPORTED_MODULE_3__articles_articles_component__["a" /* ArticlesComponent */] },
    { path: 'article/:id', component: __WEBPACK_IMPORTED_MODULE_2__article_page_article_page_component__["a" /* ArticlePageComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'acid.';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(535),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__in_memory_data_service__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__button_button_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__input_bar_input_bar_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hero_hero_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__article_card_article_card_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__article_page_article_page_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__articles_articles_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__article_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nav_burger_nav_burger_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__article_search_article_search_component__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__in_memory_data_service__["a" /* InMemoryDataService */], { delay: 0 }),
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_9__input_bar_input_bar_component__["a" /* InputBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__hero_hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_11__article_card_article_card_component__["a" /* ArticleCardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__article_page_article_page_component__["a" /* ArticlePageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__articles_articles_component__["a" /* ArticlesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__nav_burger_nav_burger_component__["a" /* NavBurgerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__article_search_article_search_component__["a" /* ArticleSearchComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__article_service__["a" /* ArticleService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_service__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleCardComponent = (function () {
    function ArticleCardComponent(articleService) {
        this.articleService = articleService;
        this.articles = [];
    }
    ArticleCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getArticles()
            .then(function (articles) { return _this.articles = articles; });
    };
    ArticleCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'article-card',
            template: __webpack_require__(536),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__article_service__["a" /* ArticleService */]) === 'function' && _a) || Object])
    ], ArticleCardComponent);
    return ArticleCardComponent;
    var _a;
}());
//# sourceMappingURL=article-card.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleSearchService = (function () {
    function ArticleSearchService(http) {
        this.http = http;
        this.articlesUrl = 'api/articles'; // URL to web api
    }
    ArticleSearchService.prototype.search = function (term) {
        return this.http
            .get(this.articlesUrl + "/?article=" + term)
            .map(function (response) { return response.json().data; });
    };
    ArticleSearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ArticleSearchService);
    return ArticleSearchService;
    var _a;
}());
//# sourceMappingURL=article-search.service.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_search_service__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ArticleSearchComponent = (function () {
    function ArticleSearchComponent(articleSearchService, router) {
        this.articleSearchService = articleSearchService;
        this.router = router;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    // Push a search term into the observable stream.
    ArticleSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ArticleSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articles = this.searchTerms
            .debounceTime(100)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.articleSearchService.search(term) : __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of([]);
        });
    };
    ArticleSearchComponent.prototype.gotoDetail = function (article) {
        var link = ['/article', article.id];
        this.router.navigate(link);
    };
    ArticleSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'article-search',
            template: __webpack_require__(538),
            styles: [__webpack_require__(528)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__article_search_service__["a" /* ArticleSearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__article_search_service__["a" /* ArticleSearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__article_search_service__["a" /* ArticleSearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], ArticleSearchComponent);
    return ArticleSearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=article-search.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.buttonClicked = function () {
        console.log('clicked');
    };
    ButtonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-button',
            template: __webpack_require__(540),
            styles: [__webpack_require__(530)]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonComponent);
    return ButtonComponent;
}());
//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = (function () {
    function HeroComponent() {
        this.bannerImagePath = '/assets/images/Homepage_Acid collage.png';
        this.backgroundImagePath = '/assets/images/Homepage_Glitch effect.png';
        this.logoImagePath = '/assets/images/Homepage_Logo.png';
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'hero',
            template: __webpack_require__(541),
            styles: [__webpack_require__(531)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroComponent);
    return HeroComponent;
}());
//# sourceMappingURL=hero.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var articles = [
            {
                id: 1,
                title: "Article 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                author: "Author 1",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_01.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 2,
                title: "Article 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                author: "Author 2",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_02.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 3,
                title: "Article 3",
                author: "Author 3",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_03.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 4,
                title: "Article 4",
                author: "Author 4",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_04.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 1,
                title: "Article 1",
                author: "Author 1",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_01.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 2,
                title: "Article 2",
                author: "Author 2",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_02.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 3,
                title: "Article 3",
                author: "Author 3",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_03.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 4,
                title: "Article 4",
                author: "Author 4",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_04.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 1,
                title: "Article 1",
                author: "Author 1",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_01.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 2,
                title: "Article 2",
                author: "Author 2",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_02.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 3,
                title: "Article 3",
                author: "Author 3",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_03.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            },
            {
                id: 4,
                title: "Article 4",
                author: "Author 4",
                tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                dateCreated: "03/02/2017",
                img: "/assets/images/mockArticleImage_04.jpg",
                article: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacus purus. Maecenas vel luctus urna. Nullam malesuada sapien eu leo fermentum, ac vulputate leo tempor. Sed sem elit, tempor sed libero quis, consequat ultricies nisi. Integer pulvinar facilisis ornare. In ultrices risus quam, nec sagittis mauris feugiat et. Vestibulum at orci quis quam commodo efficitur. Aliquam non laoreet odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus interdum mauris molestie dictum molestie. Ut eget leo lacus. In euismod risus ac sollicitudin suscipit. Aenean nec nibh viverra, sodales purus vel, gravida velit. Cras euismod condimentum odio sed sollicitudin. Cras ultrices massa id nunc mollis, vel tristique nunc dignissim.",
                    "Praesent eget tincidunt mauris. Ut blandit ipsum non lectus dictum dictum. Etiam vel purus dui. Mauris vulputate nisi ipsum. Curabitur euismod fringilla pretium. Morbi aliquam odio sit amet mauris maximus tincidunt sit amet a leo. Phasellus eget risus orci. Praesent interdum, odio ut congue mattis, eros velit gravida eros, nec suscipit ligula sapien ut magna. Vestibulum semper aliquam elementum.",
                    "Quisque nisi libero, vestibulum sit amet consequat at, vulputate ac nisl. Suspendisse aliquet felis in mi ornare ultrices. Aenean semper nunc ut nunc dignissim, et congue ante elementum. Vivamus et nunc id ligula laoreet rutrum. Proin imperdiet quis nisl eget feugiat. Cras vestibulum sit amet metus vel egestas. Etiam pulvinar, velit sit amet aliquet fermentum, eros felis fringilla ex, vel tincidunt nunc magna eget nunc. Quisque eget dui suscipit, porttitor nunc vel, dignissim erat. Quisque egestas velit in sem hendrerit, non suscipit purus ultrices. Nulla eget gravida mauris. Aenean odio nisl, faucibus id dictum sed, pulvinar id odio. Maecenas vehicula augue urna, quis tristique metus interdum et. Nunc pharetra, orci at maximus rhoncus, ex odio iaculis nunc, vel rhoncus eros nulla a quam.",
                    "Nulla faucibus commodo ultrices. Integer in sapien enim. Fusce feugiat ante non dolor aliquam faucibus. Sed maximus enim erat, eget cursus ipsum mollis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor feugiat orci vitae gravida. Sed pharetra felis ac quam hendrerit, et imperdiet odio pretium. Quisque sodales ante eget magna finibus feugiat. Aenean eu lobortis elit, quis tempus lectus. Nunc aliquam sollicitudin sem, ac rutrum eros lobortis ultrices. Vivamus magna diam, efficitur at porta sit amet, elementum sit amet est. Donec leo neque, maximus ac suscipit ac, commodo in enim. Donec ac tincidunt ex. Integer felis neque, bibendum eget ex ac, aliquam suscipit ipsum. Maecenas bibendum hendrerit est, ut maximus nulla eleifend quis.",
                    "In hac habitasse platea dictumst. Nam ut urna ut massa volutpat lacinia posuere ut ex. Donec venenatis tincidunt dui, quis dictum turpis semper ullamcorper. Nullam leo eros, finibus posuere tristique at, fermentum in lacus. Maecenas porttitor magna sed nulla eleifend, id sagittis quam egestas. Maecenas eu massa sed dui blandit dapibus. Aenean hendrerit interdum lectus sit amet dapibus. Phasellus ac condimentum mi. Quisque ac nunc imperdiet, laoreet metus at, aliquet augue. Vestibulum ullamcorper commodo ex in lacinia. Sed aliquet pretium dui, nec facilisis odio tempus vitae."
                ]
            }
        ];
        return { articles: articles };
    };
    return InMemoryDataService;
}());
//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputBarComponent = (function () {
    function InputBarComponent() {
    }
    InputBarComponent.prototype.ngOnInit = function () {
    };
    InputBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-input-bar',
            template: __webpack_require__(542),
            styles: [__webpack_require__(532)]
        }), 
        __metadata('design:paramtypes', [])
    ], InputBarComponent);
    return InputBarComponent;
}());
//# sourceMappingURL=input-bar.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBurgerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBurgerComponent = (function () {
    function NavBurgerComponent() {
        this.clicked = false;
    }
    NavBurgerComponent.prototype.ngOnInit = function () {
    };
    NavBurgerComponent.prototype.buttonClicked = function () {
        this.clicked = !this.clicked;
    };
    NavBurgerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'nav-burger',
            template: __webpack_require__(543),
            styles: [__webpack_require__(533)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavBurgerComponent);
    return NavBurgerComponent;
}());
//# sourceMappingURL=nav-burger.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  font: 16px, \"Courier\", sans-serif;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".article-card-container {\n  padding: 30px;\n  height: 37vh;\n  background-position: center;\n  background-size: 120%;\n  transition: background-size .3s;\n\n}\n\n.article-card-container:hover {\n  background-size: 130%;\n  cursor: pointer;\n}\n\nh1, h2, h3 {\n  color: white;\n  font: 30px \"Courier\", sans-serif;\n  text-shadow: 1px 1px 10px black;\n}\n\nh1 {\n  padding-bottom: 40px;\n}\n\n.article-cards-container {\n  text-align: center;\n}\n\nul {\n  /*margin: 0 auto;*/\n}\n\nli {\n  display: inline-block;\n  width: 40vw;\n  padding: 0 0 50px 50px;\n  text-align: left;\n\n}\n\n@media only screen and (max-width : 1440px) {\n  li {\n    width: 46.8vw;\n  }\n\n  .article-card-container {\n    height: 22vh;\n  }\n}\n\n@media only screen and (max-width : 1024px) {\n  li {\n    width: 45.9vw;\n    padding: 0 0 25px 25px;\n  }\n\n  .article-card-container {\n    height: 22vh;\n  }\n}\n\n@media only screen and (max-width : 425px) {\n  li {\n    padding: 0 4vw 4vw;\n    width: 93vw;\n  }\n\n  li:nth-child(odd) {\n    padding: 0 4vw 4vw;\n  }\n\n  .article-card-container {\n    background-size: 130%;\n    padding: 10px;\n    margin: 2px;\n    height: 28vh;\n  }\n\n  .article-card-container:hover {\n    background-size: 130%;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".article {\n    width: 50%;\n    margin: 0 auto;\n}\n\n.back-button {\n  background-color: grey;\n  margin: 20px 0;\n  padding: 10px 20px;\n  border: none;\n  width: 100px;\n  color: white;\n  font-size: 16px;\n}\n\np {\n  margin: 30px 0;\n  line-height: 5vh;\n}\n\n.image-container {\n  width: 100vw;\n  height: 50vh;\n  background-position: center;\n  background-size: 100%;\n}\n\n.article-info {\n  color: white;\n  margin: 0 auto;\n  padding-top: 20vh;\n  width: 50%;\n}\n\n.article-info h1, h3, h5 {\n  padding-bottom: 15px;\n}\n\n.article-info h1 {\n  font-size: 5vh;\n}\n\n@media only screen and (max-width : 425px) {\n  .article {\n      width: 90vw;\n      margin: 0 auto;\n  }\n\n  .image-container {\n    width: 100vw;\n    height: 30vh;\n    background-size: 110%;\n  }\n\n  .article-info {\n    padding-top: 5vh;\n    width: 90vw;\n  }\n\n  .article-info h1, h3, h5 {\n    padding-bottom: 5px;\n  }\n\n  .article-info h1 {\n    font-size: 3vh;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".search-input {\n  width: 300px;\n  color: blue;\n  -webkit-box-ordinal-group: none;\n      -ms-flex-order: none;\n          order: none;\n  border: none;\n  outline: none;\n  padding: 10px;\n  text-align: right;\n  font: 40px 'Helvetica', sans-serif;\n  background-color: transparent;\n}\n\n::-webkit-input-placeholder { /* Chrome */\n  color: blue;\n}\n\n.search-results {\n  color: blue;\n  font: 40px 'Helvetica', sans-serif;\n  margin-bottom: 4vh;\n}\n\n.search-results:hover {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "button {\n  padding: 10px;\n  margin: 0;\n  color: white;\n  background: red;\n  border: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: danielFont;\n  src: url('/assets/daniel.ttf');\n\n}\n\n* {\n  box-sizing: border-box;\n}\n\n#background-image {\n  z-index: -1;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n\n.imgContainer {\n  z-index: 2;\n  width: 75vw;\n  height: auto;\n  margin: 18.5vh auto;\n  display: box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  box-align: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  box-pack: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#logo {\n  position: absolute;\n  z-index: 3;\n  /*box-shadow: 0 0 100px black;*/\n}\n\n\n#banner-image {\n  height: 100%;\n  width: 100%;\n  padding: 30px;\n  position: relative;\n  -webkit-filter: brightness(50%);\n          filter: brightness(50%);\n}\n\np {\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n  left: 100px;\n  font: 10vw danielFont;\n  color: white;\n}\n\n@media only screen and (max-width : 425px) {\n  .imgContainer {\n    overflow: scroll;\n    padding: 0;\n    margin: 0;\n  }\n  .outsideContainer{\n    height: auto;\n    width: 100vw;\n    padding: 4%;\n  }\n\n  img {\n    max-width: none;\n    height: 95vh;\n    width: auto;\n    padding: 0;\n\n  }\n\n  p {\n    position: absolute;\n    bottom: 10px;\n    left: 30px;\n    font: 10vw danielFont;\n    color: white;\n\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "input {\n  margin: 0;\n  padding: 10px;\n  font-size: 16px;\n  width: 300px;\n  background-color: #aaa;\n  border: none;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".navigation-container {\n  z-index: 10;\n  position: absolute;\n  right: 100px;\n  bottom: 0;\n  color: blue;\n  text-align: right;\n  height: auto;\n\n}\n\n.navigation-container ul {\n  list-style-type: none;\n  font: 40px 'Helvetica', sans-serif;\n  float: right;\n}\n\n.navigation-container li {\n  text-align: left;\n  margin-bottom: 5vh;\n  display: block;\n}\n\n.navigation-container li:hover {\n  cursor: pointer;\n}\n\n@media only screen and (max-width : 425px) {\n  button {\n    display: none;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<div class=\"article-cards-container\">\n<ul>\n  <li *ngFor = \"let article of articles\" [routerLink]=\"['/article', article.id]\">\n    <div class=\"article-card-container\" [ngStyle]=\"{'background-image': 'url(' + article.img + ')'}\">\n      <h1>{{article.title}}</h1>\n      <h2>{{article.author}}</h2>\n      <h3>Published On: {{article.dateCreated}}</h3>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"articles\">\n  <div class=\"image-container\" [ngStyle]=\"{'background-image': 'url(' + articles.img + ')'}\">\n    <div class=\"article-info\">\n      <h1>{{articles.title}}</h1>\n      <h3>{{articles.tagline}}</h3>\n      <h5>Author: {{articles.author}}</h5>\n      <h5> Published On: {{articles.dateCreated}}</h5>\n    </div>\n  </div>\n  <div class=\"article\">\n    <p *ngFor=\"let paragraph of articles.article\">\n    {{paragraph}}\n    </p>\n    <button class=\"back-button\" (click)=\"goBack()\">Back</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" class=\"search-input\" placeholder=\"search\">\n</div>\n\n<div *ngFor=\"let article of articles | async let i=index\"\n  [routerLink]=\"['/article', article.id]\"\n  class=\"search-results\">\n  <template [ngIf]= \"i < 4\">\n    {{article.title}}\n  </template>\n</div>\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<hero></hero>\n<article-card></article-card>\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<p>\n  <button>Click here</button>\n</p>\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<nav-burger></nav-burger>\n<div class=\"outsideContainer\">\n  <img id=\"background-image\" [src]=\"backgroundImagePath\">\n  <div class=\"imgContainer\">\n    <img id=\"logo\" [src]=\"logoImagePath\">\n\n    <img id=\"banner-image\" [src]=\"bannerImagePath\">\n\n  </div>\n</div>"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<p>\n  <input type=\"text\">\n</p>\n"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation-container\">\n    <ul>\n      <li [routerLink]=\"['/']\">read</li>\n      <li [routerLink]=\"['/']\">submit</li>\n      <li [routerLink]=\"['/']\">the trip?</li>\n    </ul>\n</div>\n"

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ })

},[575]);
//# sourceMappingURL=main.bundle.js.map