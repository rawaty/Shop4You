import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormdataService } from '../services/formdata.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {
  fullName:string;
  fullAddress:string;
  userCountry:string;
  userCity:string;
  userPostalCode:number;
  userPhoneNumber:number;
  delivery:string;
  usercard:string;
  userexpiry;
  usercvv;
  usercardholder;
  paymentOption;

 public TotalPrice:number;
  public purchaseProduct:any=[];

  constructor(private formservice:FormdataService,private cartService:CartService) { 
    // console.log(this.formservice.userFullName);
  }

  ngOnInit(): void {
    this.fullName=this.formservice.userFullName;
    this.fullAddress=this.formservice.userFullAddress;
    this.userCountry=this.formservice.userCountry;
    this.userCity= this.formservice.userCity;
    this.userPostalCode=this.formservice.userPostalCode;
    this.userPhoneNumber=this.formservice.userPhoneNumber;
    this.delivery=this.formservice.deliveryOption;
    this.usercard=this.formservice.usercard;
    this.userexpiry=this.formservice.userexpiry;
    this.usercvv=this.formservice.usercvv;
   this.usercardholder=this.formservice.usercardholder;
    this.paymentOption=this.formservice.paymentOption;

  
      this.cartService.getProducts()
      .subscribe(res=>{
        this.purchaseProduct=res;
  
        this.TotalPrice=this.cartService.getTotalPrice();
        console.log(res)
      })
  
    }
}
