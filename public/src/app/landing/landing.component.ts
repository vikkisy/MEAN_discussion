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
  
      let words = ["makes the world go round?", "is a good recipe?", "is a good movie?", "is the best phone?", "is a good coding bootcamp?"],
      el = document.getElementById('magic'),
      word_counter = 0,
      character_counter = 0;
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
