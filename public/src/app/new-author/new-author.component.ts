import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  author = { name: '' };
  errorMesgs = [];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit() {

    let observable = this._httpService.addAuthor(this.author);
    observable.subscribe((data: any) => {
      if (data.errors) {
        console.log(data);

        console.log(data.errors.name.message);
          this.errorMesgs.push(data.errors.name.message);
      
      }
      else {
        console.log('Created', data);
        this.author = { name: '' };
        this._router.navigate(['/']);
      }

    })
  }
}

