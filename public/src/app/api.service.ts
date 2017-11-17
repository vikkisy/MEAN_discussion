import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {

  constructor(private _http: Http, private _router: Router) { }

  register(userObj) {
    console.log("came into register")
    console.log(userObj);
    return this._http.post('/api/reg', userObj)
      .map(Response => Response.json()).toPromise();
  }

  getCurrentUser() {
    return this._http.get('/api/current')
    .map(Response => Response.json()).toPromise();
  }

  createQuestion(questObj) {
    console.log("came into create question");
    console.log(questObj);
    return this._http.post('/api/question', questObj)
      .map(Response => Response.json()).toPromise();
  }

  getQuestions(){
    return this._http.get('/api/question')
    .map(Response => Response.json()).toPromise();
  }

  // oneQuestion(){
  //   console.log("requested a question");
  //   return this._http.get('/api/question/one')
  //     .map(Response => Response.json()).toPromise();
  // }  

  currentQuestion(id){
    return this._http.get('/api/question/'+id)
      .map(Response => Response.json()).toPromise();
  }

  newAnswer(answerObj, qid) {
    return this._http.post('/api/answer/'+ qid, answerObj)
      .map(Response => Response.json()).toPromise();
  }

  likeAnswer(aid) {
    console.log("inside like service", aid)
    return this._http.post('/api/answer/like/'+aid, aid)
      .map(Response => Response.json()).toPromise();
  }


}
