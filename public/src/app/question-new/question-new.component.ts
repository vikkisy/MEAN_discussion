import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
  newQuestion: object = {
    text: "",
    desc: ""
  };
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }

  submitQuestion(){
    console.log("submitted new question");
    this._apiService.createQuestion(this.newQuestion)
    .then((data) => {
      console.log("then", data);
      this._router.navigate(['dashboard']);
    })
    .catch((error => {
      console.log("error submitting question");
      console.log("catch", error);
    }))
  }  


}
