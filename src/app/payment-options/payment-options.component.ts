import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormdataService } from '../services/formdata.service';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {
  paymentForm:FormGroup;
  constructor(private data:FormdataService) { }

  ngOnInit(): void {
    this.paymentForm=new FormGroup({
     
        'usercard':new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(16)]),
        'userexpiry':new FormGroup({
          'usermonth':new FormControl(null,Validators.required),
          'useryear':new FormControl(null,Validators.required)
        }),
        'usercvv':new FormControl(null,[Validators.required,Validators.maxLength(3)]),
        'usercardholder':new FormControl(null,Validators.required),
        'paymentOption':new FormControl(null,Validators.required)
      

    });
  }
  SavePaymentOption(value){
    this.data.SavePaymentOption(value);

  }

}
