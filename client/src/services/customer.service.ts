import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx";
import { SessionService } from './session.service';



@Injectable()
export class CustomerService {
  BASE_URL: string = "http://localhost:3000";
  options:object = {withCredentials:true};

  constructor(
    private http: Http
  ){}

  getCustomer() {
    return this.http.get(`${this.BASE_URL}/customer/show`, this.options)
                    .map(res => {
                      console.log(res.json())
                     return res.json()
                    })
                    .catch(e => e);
  }
}