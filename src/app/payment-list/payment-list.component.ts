import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  getAllPayments: any;
  employeeForm: FormGroup = new FormGroup({});
  loadDataSubscriber: Subscription | undefined;
  constructor(private modalService:NgbModule,private service: PaymentsService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    if(this.loadDataSubscriber){
      this.loadDataSubscriber.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.loadAllPayments()
  }

  loadAllPayments(){
    this.service.getAllPayments().subscribe(data => {
      this.getAllPayments = data;
      console.log(this.getAllPayments);
    })
  }


}
