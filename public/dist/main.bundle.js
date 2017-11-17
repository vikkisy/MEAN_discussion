webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/answer-new/answer-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer-new/answer-new.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\">Home</a> \n<a href=\"\">Go to question</a>\n<a href=\"\">Logout</a>\n\n<h1>{{currentQuestion.text }}</h1>\n<h3>{{currentQuestion.desc }}</h3>\n\n<form (submit)=\"submitAnswer()\" #formData='ngForm'>\n\n  <table>\n    <tr>\n      <td>Your Answer: </td>\n      <td>\n        <textarea cols=\"30\" rows=\"10\" \n                  name=\"text\" \n                  required minlength=\"5\" \n                  [(ngModel)]=\"newAnswer.text\" \n                  #text=\"ngModel\"></textarea>\n        <span *ngIf=\"text.invalid && text.dirty\">Please enter answer that's at least 5 characters</span>\n      </td>\n    </tr>\n    <tr>\n      <td>Supporting Details to Answer\n        <p>(Optional)</p>\n      </td>\n      <td>\n        <textarea cols=\"30\" rows=\"10\" name=\"desc\" [(ngModel)]=\"newAnswer.details\" #details=\"ngModel\"></textarea>\n      </td>\n    </tr>\n  </table>\n  <button [routerLink]=\"['dashboard']\">Cancel</button>\n\n  <input type=\"submit\" value=\"Submit\" [disabled]='!formData.valid'>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/answer-new/answer-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerNewComponent = (function () {
    function AnswerNewComponent(_apiService, _router, _route) {
        this._apiService = _apiService;
        this._router = _router;
        this._route = _route;
        this.newAnswer = {
            text: "",
            details: ""
        };
        this.currentUser = { name: "" };
    }
    AnswerNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this.thisQiD = params.get('id');
            console.log(_this.thisQiD);
        });
        this._apiService.currentQuestion(this.thisQiD)
            .then(function (data) {
            console.log("found question", data);
            _this.currentQuestion = data;
        })
            .catch(function (error) {
            console.log(error);
        });
        this._apiService.getCurrentUser()
            .then(function (data) {
            _this.currentUser = data;
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    AnswerNewComponent.prototype.submitAnswer = function () {
        var _this = this;
        console.log("submitted answer");
        this._apiService.newAnswer(this.newAnswer, this.thisQiD)
            .then(function (data) {
            console.log("then", data);
            _this._router.navigate(['/question/' + _this.thisQiD]);
        })
            .catch(function (error) {
            console.log("error submitting answer");
            console.log(error);
        });
    };
    return AnswerNewComponent;
}());
AnswerNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-answer-new',
        template: __webpack_require__("../../../../../src/app/answer-new/answer-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/answer-new/answer-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AnswerNewComponent);

var _a, _b, _c;
//# sourceMappingURL=answer-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    ApiService.prototype.register = function (userObj) {
        console.log("came into register");
        console.log(userObj);
        return this._http.post('/api/reg', userObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getCurrentUser = function () {
        return this._http.get('/api/current')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.createQuestion = function (questObj) {
        console.log("came into create question");
        console.log(questObj);
        return this._http.post('/api/question', questObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getQuestions = function () {
        return this._http.get('/api/question')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    // oneQuestion(){
    //   console.log("requested a question");
    //   return this._http.get('/api/question/one')
    //     .map(Response => Response.json()).toPromise();
    // }  
    ApiService.prototype.currentQuestion = function (id) {
        return this._http.get('/api/question/' + id)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.newAnswer = function (answerObj, qid) {
        return this._http.post('/api/answer/' + qid, answerObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.likeAnswer = function (aid) {
        console.log("inside like service", aid);
        return this._http.post('/api/answer/like/' + aid, aid)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ApiService);

var _a, _b;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_new_question_new_component__ = __webpack_require__("../../../../../src/app/question-new/question-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__answer_new_answer_new_component__ = __webpack_require__("../../../../../src/app/answer-new/answer-new.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__["a" /* LandingComponent */],
        children: []
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: []
    },
    {
        path: 'question/new',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_4__question_new_question_new_component__["a" /* QuestionNewComponent */],
        children: []
    },
    {
        path: 'question/:id',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_5__question_question_component__["a" /* QuestionComponent */],
        children: []
    },
    {
        path: 'answer/:id',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_6__answer_new_answer_new_component__["a" /* AnswerNewComponent */],
        children: []
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_new_question_new_component__ = __webpack_require__("../../../../../src/app/question-new/question-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__answer_new_answer_new_component__ = __webpack_require__("../../../../../src/app/answer-new/answer-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__question_new_question_new_component__["a" /* QuestionNewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__answer_new_answer_new_component__["a" /* AnswerNewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__question_question_component__["a" /* QuestionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n  width: 600px;\r\n  margin-top: 25px;\r\n  border: 2px solid black;\r\n}\r\n\r\nth {\r\n  height: 25px;\r\n  width: 100px;\r\n  background-color: #cccccc;\r\n  padding: 15px;\r\n}\r\n\r\ntr:nth-child(even){\r\n  background-color: #f2f2f2\r\n}\r\ntr{\r\n  height: 50px;\r\n  width: 100px;\r\n  padding: 15px;\r\n  text-align: left;\r\n}\r\ntd{\r\n  height: 50px;\r\n  padding-left: 15px;\r\n  text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hi {{currentUser.name}}</h1> \n<a [routerLink]=\"['']\">Logout</a>\n\n<a [routerLink]=\"['/question','new']\">Add a question</a>\n\n\n<p>search notes:\n<input type=\"text\" name=\"\" id=\"\">\n<!-- <input type=\"text\" name=\"searchString\" #searchString='ngModel' [(ngModel)]=\"searchString\" (keyup)=\"searchNotes()\"> -->\n</p>\n\n<table>\n  <thead>\n    <th>Question</th>\n    <th>Answers</th>\n    <th>Action</th>\n  </thead>\n  <tbody>\n    <tr *ngFor='let question of allQuestions'>\n      <td>{{question.text}}</td>\n      <td>{{question.answers.length}}</td>\n      <td><a [routerLink]=\"['/question',question._id]\">Show</a> <a [routerLink]=\"['/answer',question._id]\">Answer</a></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_apiService) {
        this._apiService = _apiService;
        this.currentUser = { name: "" };
        this.allQuestions = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("loaded dashboard");
        this._apiService.getCurrentUser()
            .then(function (data) {
            _this.currentUser = data;
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            console.log(error);
        });
        this._apiService.getQuestions()
            .then(function (data) {
            console.log("got questions");
            _this.allQuestions = data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.searchQuestions = function () {
        this.allQuestions = this.allQuestions.filter(function (str) {
            //nooo timeeee
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>Q & A</h2>\n<form (submit)=\"onSubmit()\">\n  Name: \n  <input type=\"text\" \n         name=\"name\"\n         required\n         [(ngModel)]=\"user.name\"\n         #name=\"ngModel\">\n  <p *ngIf=\"name.invalid && name.dirty\">Please enter a name</p>\n  <input type=\"submit\" value=\"Enter\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = (function () {
    function LandingComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.user = { name: "" };
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("clicked onSubmit");
        console.log(this.user);
        this._apiService.register(this.user)
            .then(function (data) {
            console.log("then", data);
            _this._router.navigate(['dashboard']);
        })
            .catch((function (error) {
            console.log("catch", error);
        }));
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LandingComponent);

var _a, _b;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/question-new/question-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-new/question-new.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['dashboard']\">Home</a>\n<a href=\"\">Logout</a>***\n\n<h1>New Question</h1>\n\n<form (submit)=\"submitQuestion()\" #formData='ngForm'>\n\n  <table>\n    <tr>\n      <td>Question</td>\n      <td>\n              <textarea cols=\"30\" rows=\"10\"\n                        name=\"text\"\n                        required\n                        minlength=\"10\"\n                        [(ngModel)]=\"newQuestion.text\"\n                        #text=\"ngModel\"\n              ></textarea>\n              <span *ngIf=\"text.invalid && text.dirty\">Please enter question at least 10 characters</span>\n      </td>\n    </tr>\n    <tr>\n      <td>Description \n        <p>(Optional)</p>\n      </td>\n      <td>\n        <textarea cols=\"30\" rows=\"10\"\n                  name=\"desc\"\n                  [(ngModel)]=\"newQuestion.desc\"\n                  #desc=\"ngModel\"\n        ></textarea>\n      </td>\n    </tr>\n  </table>\n  <button [routerLink]=\"['dashboard']\">Cancel</button>\n  <input type=\"submit\" value=\"Submit\" [disabled]='!formData.valid'>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/question-new/question-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionNewComponent = (function () {
    function QuestionNewComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.newQuestion = {
            text: "",
            desc: ""
        };
    }
    QuestionNewComponent.prototype.ngOnInit = function () {
    };
    QuestionNewComponent.prototype.submitQuestion = function () {
        var _this = this;
        console.log("submitted new question");
        this._apiService.createQuestion(this.newQuestion)
            .then(function (data) {
            console.log("then", data);
            _this._router.navigate(['dashboard']);
        })
            .catch((function (error) {
            console.log("error submitting question");
            console.log("catch", error);
        }));
    };
    return QuestionNewComponent;
}());
QuestionNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-question-new',
        template: __webpack_require__("../../../../../src/app/question-new/question-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-new/question-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], QuestionNewComponent);

var _a, _b;
//# sourceMappingURL=question-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\">Home</a>\n<a [routerLink]=\"['/answer',question._id]\">Answer this question</a>\n<a [routerLink]=\"['']\">Logout</a>\n\n\n<h1>{{currentQuestion.text}}</h1>\n<h3>{{currentQuestion.desc}}</h3>\n\n<div *ngFor='let answer of currentQuestion.answers'>\n  <p [ngStyle]=\"{'font-weight': 'bold'}\"></p>{{answer.text}}\n  <p>{{answer.details}}</p>\n  <p>Likes: {{answer.likes}}</p> \n  <p><button (click)=\"like(answer._id)\">Like</button></p>\n\n  \n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionComponent = (function () {
    function QuestionComponent(_apiService, _router, _route) {
        this._apiService = _apiService;
        this._router = _router;
        this._route = _route;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this.thisQiD = params.get('id');
            console.log(_this.thisQiD);
        });
        this._apiService.currentQuestion(this.thisQiD)
            .then(function (data) {
            console.log("found question", data);
            _this.currentQuestion = data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    QuestionComponent.prototype.like = function (aid) {
        console.log("clicked like");
        this._apiService.likeAnswer(aid)
            .then(function (data) {
            console.log("liked answer", data);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-question',
        template: __webpack_require__("../../../../../src/app/question/question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], QuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map