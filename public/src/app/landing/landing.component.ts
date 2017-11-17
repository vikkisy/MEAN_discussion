import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user: object = {name:""};
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("clicked onSubmit");
    console.log(this.user);
    this._apiService.register(this.user)
      .then((data) => {
        console.log("then", data);
        this._router.navigate(['dashboard']);
      })
      .catch((error => {
        console.log("catch", error);
      }))
  }

}
