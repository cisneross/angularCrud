import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
allAuthors =[];
  constructor(private _httpService: HttpService, private _router:Router){}

  ngOnInit() {
    this.grabAuthors();
  }
  grabAuthors(){
    let observable = this._httpService.getAuthors();
    observable.subscribe((data:any) => {
      console.log('got the authors yo!', data);
      this.allAuthors = data;
    })
  }
  onDelete(id){
    console.log(id);
    let observable  = this._httpService.sendAuthToDelete(id);
    observable.subscribe((data: any) => {
      this.grabAuthors;
    });
  }

}
