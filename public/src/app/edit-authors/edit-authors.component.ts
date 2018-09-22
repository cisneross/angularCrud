import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.css']
})
export class EditAuthorsComponent implements OnInit {
editAuthor = {name: ''};
errorMesgs =[];
  constructor(private _httpService: HttpService, private _route:Router, private _activatedroute:ActivatedRoute){}

  ngOnInit() {
    this.findTheAuthor();
  }


    onEdit(){
    let observable = this._httpService.editAuthor(this.editAuthor);
    observable.subscribe((data: any) => {
      if (data.errors) {
        console.log(data);

        console.log(data.errors.name.message);
          this.errorMesgs.push(data.errors.name.message);
      
      }
      else {
        console.log('edited', data);
        this.editAuthor = {name: ''};
        this._route.navigate(['/']);
      }

    })
  }


  findTheAuthor(){
    this._activatedroute.params.subscribe((params)=>{
      console.log('this is the id', params['id']);
      var id = params['id'];
      var tempObservable = this._httpService.findOneAuthor(id);
      tempObservable.subscribe((data:any)=>{
        this.editAuthor = data;
        console.log('this is the author',this.editAuthor);
      });
    });
  }
}
