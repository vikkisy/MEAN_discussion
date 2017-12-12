import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  thisQiD: string;
  currentQuestion: object;
  constructor(private _apiService: ApiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    
    this._route.paramMap.subscribe(params => {
      this.thisQiD = params.get('id');
      console.log(this.thisQiD);
    })

    this._apiService.currentQuestion(this.thisQiD)
      .then((data) => {
        console.log("found question", data);
        this.currentQuestion = data;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  like(aid){
    console.log("clicked like");
    this._apiService.likeAnswer(aid)
      .then((data) => {
        console.log("liked answer", data);
        this._apiService.currentQuestion(this.thisQiD)
          .then((data) => {
            console.log("found question", data);
            this.currentQuestion = data;
          })
          .catch((error) => {
            console.log(error);
          })

      })
      .catch((error) => {
        console.log(error);
      })

  }

}
