import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/RX"

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  sendData(userForm: FormGroup) {
    const body = JSON.stringify(userForm.value);
    const headers = new Headers({'Content-type': 'applictaion/json'});
    
    return this.http.post('https://shopping-cart-85df3.firebaseio.com/userdata.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://shopping-cart-85df3.firebaseio.com/userdata.json')
    .map((response: Response) => response.json());
  }

}
