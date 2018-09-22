import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}
  addAuthor(auth){
    return this._http.post('/create', auth);
  }
  getAuthors(){
    return this._http.get('/allauthors');
  }
  findOneAuthor(id){
    console.log('Got to srvice',id);
    return this._http.get(`/findauthor/${id}`);
  }
  editAuthor(author){
    console.log('this is service with id', author._id);
    return this._http.put(`/edit/${author._id}`, author);
  }
  sendAuthToDelete(id){
    console.log("I got to delete", id);
    return this._http.delete(`/delete/${id}`);
  }


}

