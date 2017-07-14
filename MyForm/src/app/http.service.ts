import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService {

  constructor(public http: Http) {
  }

  getUsers() {
    // let options: any = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'json'
    //   }
    // };
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }
}
