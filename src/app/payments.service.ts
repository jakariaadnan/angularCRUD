import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PaymentList } from './payment-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  url = "https://localhost:44336/api/Values";
  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) { }
  getAllPayments(): Observable<PaymentList[]>{
    return this.http.get<PaymentList[]>(this.url + '/');
  }

  createPayment(obj: any){
    return this.http.post(this.url + '/Post', obj);
  }

  deletePayment(id: number){
    return this.http.delete(this.url + `/Delete/${id}`);
  }
}
