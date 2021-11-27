import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormdataService } from '../services/formdata.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {


  shippingForm:FormGroup;
  country:string[]=['India','USA','Australia'];
  // delivery:any=[{"ship":"Next Day Delivery","detail":"Between 2-5 working Days"},
  // {"ship":"Next Day Delivery -$20","detail":"24 hours from Checkout"}];
  allowData:any;
  constructor(private data:FormdataService) { }

  ngOnInit(): void {
    this.shippingForm=new FormGroup({
      'userFirstName':new FormControl(null,Validators.required),
      'userLastName':new FormControl(null,Validators.required),
      'userAddress1':new FormControl(null,Validators.required),
      'userAddress2':new FormControl(null),
      'userCountry':new FormControl('India'),
      'userCity':new FormControl(null,Validators.required),
      'userPostalCode':new FormControl(null,[Validators.required,Validators.maxLength(7)]),
      'userPhoneNumber':new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      'deliveryOption':new FormControl(null,Validators.required)
      

    });
   
  }
 SaveEmployee(value){
   this.data.SaveEmployee(value);
 }

}
