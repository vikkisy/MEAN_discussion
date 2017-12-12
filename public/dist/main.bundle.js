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
exports.push([module.i, "/* .topnav {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 100px);\r\n} */\r\n.wrapper {\r\n    margin: 25px 50px 50px 50px;\r\n    font-family: 'Khula', sans-serif;\r\n}\r\n.header {\r\n    background-color: black;\r\n    color: white;\r\n    padding: 15px;\r\n    margin-bottom: 25px;\r\n}\r\n.header h1 {\r\n    font-family: 'Archivo Black', sans-serif;\r\n}\r\n a{\r\n  color: black;\r\n  text-decoration: underline;\r\n}\r\ntd {\r\n    vertical-align: top;\r\n}\r\n\r\ntd:nth-child(1) {\r\n    padding-right: 15px; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer-new/answer-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n    \n\n\n<div class=\"wrapper\">\n  <a [routerLink]=\"['/dashboard']\">HOME</a> |\n  <a [routerLink]=\"['/question',currentQuestion._id]\">RETURN TO QUESTION</a> |\n  <a [routerLink]=\"['']\">LOGOUT</a>\n    <div class=\"header\">\n        <h1>{{currentQuestion.text }}</h1>\n        <p>{{currentQuestion.desc }}</p>\n    </div>\n\n<form (submit)=\"submitAnswer()\" #formData='ngForm'>\n\n  <table>\n    <tr>\n      <td>Your Answer: </td>\n      <td>\n        <textarea cols=\"30\" rows=\"5\" \n                  name=\"text\" \n                  required minlength=\"5\" \n                  [(ngModel)]=\"newAnswer.text\" \n                  #text=\"ngModel\"></textarea>\n        <span *ngIf=\"text.invalid && text.dirty\">Please enter answer that's at least 5 characters</span>\n      </td>\n    </tr>\n    <tr>\n      <td>Supporting Details to Answer: \n        <p>(Optional)</p>\n      </td>\n      <td>\n        <textarea cols=\"30\" rows=\"3\" name=\"desc\" [(ngModel)]=\"newAnswer.details\" #details=\"ngModel\"></textarea>\n      </td>\n    </tr>\n    <tr>\n      <td></td>\n      <td>\n        <button [routerLink]=\"['dashboard']\">Cancel</button>\n        \n        <input type=\"submit\" value=\"Submit\" [disabled]='!formData.valid'>\n      </td>\n    </tr>\n  </table>\n  \n\n</form>\n</div>"

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
            details: "",
            likes: 0
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
    ApiService.prototype.createQuestion = function (questObj, id) {
        console.log("came into create question");
        console.log(questObj);
        return this._http.post('/api/question/' + id, questObj)
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
exports.push([module.i, ".wrapper {\r\n  margin: 25px 50px 50px 50px;\r\n}\r\n.header {\r\n  /* display: grid;\r\n  grid-template-columns: repeat(3, 220px ) ; */\r\n  background-color: black;\r\n  color: white;\r\n  padding: 15px;\r\n}\r\n.header a{\r\n  color: white;\r\n  font-family: 'Archivo Black', sans-serif;\r\n  text-decoration: underline;\r\n}\r\n.style1 {\r\n  font-family: 'Archivo Black', sans-serif;\r\n  grid-column: 1/3;\r\n}\r\n.right {\r\n  grid-column: 3/4;\r\n  justify-self: end;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n\r\n}\r\n.content {\r\n  margin-top: 25px;\r\n  height: 600px;\r\n  overflow-y: scroll;\r\n  padding: 25px;\r\n}\r\n.contentQuestion {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 15px;\r\n  -ms-grid-columns: (mimax(360px, 1fr))[auto-fit];\r\n      grid-template-columns: repeat(auto-fit, mimax(360px, 1fr)); \r\n  border: 1px dashed black;\r\n  /* width: 660px; */\r\n  padding: 15px;\r\n  margin: 25px 0px;\r\n  font-family: 'Khula', sans-serif;\r\n  font-size: 14px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"header\">\n      <h1 class=\"style1\">Hello {{currentUser.name}} !</h1>\n        <a [routerLink]=\"['/question','new']\">ADD A QUESTION</a> | \n        <a [routerLink]=\"['']\">LOGOUT</a> \n        \n\n        <!-- <input type=\"text\" name=\"\" id=\"\" placeholder=\"Search Questions\"> -->\n        <!-- <input type=\"submit\" value=\"Search\"> -->\n        <!-- <input type=\"text\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"searchQuestions()\"> -->\n        \n<!-- \n      <div class=\"right\"> -->\n      \n      <!-- </div> -->\n    </div>\n    <div class=\"content\">\n        <div *ngFor='let question of allQuestions' class=\"contentQuestion\">\n          <p><span class=\"style1\">Question:</span>\n          {{question.text}}</p>\n          <p><span class=\"style1\">Answers: </span> {{question.answers.length}}</p>\n          <p [ngStyle]=\"{'font-style':'italic'}\">Submitted By: {{question._user}}</p>\n          <p>\n            <a [routerLink]=\"['/question',question._id]\">Show Question Details</a> |\n            <a [routerLink]=\"['/answer',question._id]\">Answer Question</a>\n          </p>\n        </div>\n    </div>\n\n\n</div>\n"

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
            console.log("got questions", data);
            _this.allQuestions = data;
        })
            .catch(function (error) {
            console.log(error);
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
exports.push([module.i, ".container {\r\n    margin-top: 200px;\r\n    text-align: center;\r\n}\r\nh1 {\r\n    font-family: 'Archivo Black', sans-serif;\r\n}\r\n#msg {\r\n    font-size: 18px;\r\n    margin: 25px;\r\n    font-family: 'Archivo Narrow', sans-serif;\r\n}\r\n#magic{\r\n    color: #777;\r\n    border-right: 1px solid #777;\r\n    padding-right: 7px;\r\n    display: inline;\r\n    font-size: 18px;\r\n}\r\ninput {\r\n    text-align: center;\r\n    font-family: 'Khula', sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <h1>Discussion Board</h1>\n\n        <div id=\"msg\">\n             What\n            <div id=\"magic\"></div>\n        </div>\n           \n\n      <form (submit)=\"onSubmit()\">\n        \n        <input type=\"text\" placeholder=\"Enter Name To Discuss\" name=\"name\" required [(ngModel)]=\"user.name\" #name=\"ngModel\">\n        <p *ngIf=\"name.invalid && name.dirty\">Please enter a name</p>\n        <input type=\"submit\" value=\"Enter\">\n      </form>\n      \n</div>\n"

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
        var words = ["makes the world go round?", "is a good recipe?", "is a good movie?", "is the best phone?", "is a good coding bootcamp?"], el = document.getElementById('magic'), word_counter = 0, character_counter = 0;
        function updateText() {
            if (words[word_counter][character_counter] == " ") {
                el.innerHTML = el.innerHTML + "&nbsp;";
                character_counter++;
            }
            else {
                el.innerHTML = el.innerHTML + words[word_counter][character_counter++];
            }
            if (character_counter == words[word_counter].length + 1) {
                word_counter++;
                character_counter = 0;
                el.innerHTML = '';
                if (word_counter == words.length)
                    word_counter = 0;
            }
        }
        setInterval(updateText, 200);
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
exports.push([module.i, ".wrapper {\r\n    margin: 25px 50px 50px 50px;\r\n}\r\n.header {\r\n    background-color: black;\r\n    color: white;\r\n    padding: 15px;\r\n    font-family: 'Archivo Black', sans-serif;\r\n    margin-bottom: 25px;\r\n}\r\n.header a{\r\n  color: white;\r\n  text-decoration: underline;\r\n}\r\n\r\ntd {\r\n    vertical-align: top;\r\n}\r\n\r\ntd:nth-child(1) {\r\n    padding-right: 15px; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-new/question-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n     <div class=\"header\">\n      <a [routerLink]=\"['/dashboard']\">HOME</a> | \n      <a [routerLink]=\"['']\">LOGOUT</a>\n\n      <h1>Add A New Question</h1>\n      </div>\n\n      <form (submit)=\"submitQuestion(currentUser._id)\" #formData='ngForm'>\n\n        <table class=\"content\">\n          <tr>\n            <td>Question</td>\n            <td>\n                    <textarea cols=\"30\" rows=\"5\"\n                              name=\"text\"\n                              required\n                              minlength=\"10\"\n                              [(ngModel)]=\"newQuestion.text\"\n                              #text=\"ngModel\"\n                    ></textarea>\n                    <span *ngIf=\"text.invalid && text.dirty\">Please enter question at least 10 characters</span>\n            </td>\n          </tr>\n          <tr>\n            <td>Description \n              <p>(Optional)</p>\n            </td>\n            <td>\n              <textarea cols=\"30\" rows=\"5\"\n                        name=\"desc\"\n                        [(ngModel)]=\"newQuestion.desc\"\n                        #desc=\"ngModel\"\n              ></textarea>\n            </td>\n          </tr>\n          <tr>\n            <td></td>\n            <td><button [routerLink]=\"['dashboard']\">Cancel</button>\n            <input type=\"submit\" value=\"Submit\" [disabled]='!formData.valid'></td>\n          </tr>\n        </table>\n        \n\n      </form>\n\n</div>"

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
        this.currentUser = { name: "" };
        this.newQuestion = {
            text: "",
            desc: "",
        };
    }
    QuestionNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.getCurrentUser()
            .then(function (data) {
            _this.currentUser = data;
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    QuestionNewComponent.prototype.submitQuestion = function (id) {
        var _this = this;
        console.log("submitted new question");
        this._apiService.createQuestion(this.newQuestion, id)
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
exports.push([module.i, "\r\n.container {\r\n    font-family: 'Khula', sans-serif;\r\n    margin: 25px;\r\n}\r\na {\r\n    font-family: 'Archivo Black', sans-serif;\r\n    color: black;\r\n    text-decoration: underline;\r\n}\r\n.top {\r\n    border: 1px dashed black;\r\n    padding: 15px;\r\n}\r\n.top h1 {\r\n    font-family: 'Archivo Black', sans-serif;\r\n    \r\n}\r\n.answers {\r\n    margin-top: 50px;\r\n    border-spacing: 0px;\r\n}\r\n\r\n.answers td:nth-child(1) {\r\n    width: 300px;\r\n    padding: 15px;\r\n}\r\n\r\n.answers td:nth-child(2) {\r\n    width: 100px;\r\n    padding: 15px;\r\n    text-align: right;\r\n}\r\n\r\n.answers td:nth-child(3) {\r\n    width: 100px;\r\n    padding: 15px;\r\n    text-align: right;\r\n}\r\n\r\n.answers tr {\r\n    background-color: rgba(236, 235, 235, 0.993);\r\n    margin-bottom: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\nbutton {\r\n    padding: 10px 20px;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n    color: white;\r\n    background-color: cornflowerblue;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n    <a [routerLink]=\"['/dashboard']\">HOME</a> |\n    <a [routerLink]=\"['']\">LOGOUT</a>\n\n    <div class=\"top\">\n      <h1>{{currentQuestion.text}}</h1>\n      <h4>{{currentQuestion.desc}}</h4>\n      <p>Submitted By: {{currentQuestion._user}}</p>\n      <a [routerLink]=\"['/answer',currentQuestion._id]\">Answer this question</a>\n    </div>\n\n    \n\n    <table class=\"answers\">\n    <tr [ngStyle]=\"{'border': '5px solid black'}\" *ngFor='let answer of currentQuestion.answers' >\n      <td>\n        <span [ngStyle]=\"{'font-weight': 'bold'}\">{{answer.text}}</span>\n        <p>{{answer.details}}</p>\n      </td>\n      <td>\n         Likes: {{answer.likes}}\n      </td>\n      <td>\n        <button (click)=\"like(answer._id)\"> Like</button>\n      </td>\n      \n    </tr>\n    </table>\n    \n\n</div>\n\n"

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
        var _this = this;
        console.log("clicked like");
        this._apiService.likeAnswer(aid)
            .then(function (data) {
            console.log("liked answer", data);
            _this._apiService.currentQuestion(_this.thisQiD)
                .then(function (data) {
                console.log("found question", data);
                _this.currentQuestion = data;
            })
                .catch(function (error) {
                console.log(error);
            });
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