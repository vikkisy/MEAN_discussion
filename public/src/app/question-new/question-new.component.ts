import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
  currentUser: object = { name: "" };
  newQuestion: object = {
    text: "",
    desc: "",
  };
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this._apiService.getCurrentUser()
      .then((data) => {
        this.currentUser = data;
        console.log(this.currentUser);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  submitQuestion(id){
    console.log("submitted new question");
    this._apiService.createQuestion(this.newQuestion, id)
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
