import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.css']
})
export class AnswerNewComponent implements OnInit {
  newAnswer: object = {
    text: "",
    details: "",
    likes: 0
  }
  thisQiD: string;
  currentQuestion: object;
  currentUser: object = { name: "" };
  constructor(private _apiService: ApiService, private _router: Router, private _route: ActivatedRoute) { 
    
  }

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

    this._apiService.getCurrentUser()
      .then((data) => {
        this.currentUser = data;
        console.log(this.currentUser);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  submitAnswer() {
    console.log("submitted answer");
    this._apiService.newAnswer(this.newAnswer, this.thisQiD)
    .then((data) => {
      console.log("then", data);
      this._router.navigate(['/question/'+ this.thisQiD])
    })
    .catch((error) => {
      console.log("error submitting answer");
      console.log(error);
    })
  }

}
