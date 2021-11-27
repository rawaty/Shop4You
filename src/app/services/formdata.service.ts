import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {
 userFullName:string;
  userFullAddress:string;
  userCountry:string;
  userCity:string;
  userPostalCode:number;
  userPhoneNumber:number;
  deliveryOption:string;

  usercard;
  userexpiry;
  usercvv;
  usercardholder
  paymentOption
  constructor() { }

  public SaveEmployee(empdata){
    this.userFullName=empdata.userFirstName+" "+empdata.userLastName;
    this.userFullAddress=empdata.userAddress1+" "+empdata.userAddress2;
    this.userCountry=empdata.userCountry;
    this.userCity=empdata.userCity;
    this.userPostalCode=empdata.userPostalCode;
    this.userPhoneNumber=empdata.userPhoneNumber;
    this.deliveryOption=empdata.deliveryOption;

    // console.log(this.userFullName+" "+this.userPostalCode);

  }

  SavePaymentOption(modeOfPayment){
    this.usercard=modeOfPayment.usercard;
    this.userexpiry=modeOfPayment.userexpiry.usermonth+" "+modeOfPayment.userexpiry.useryear;
    this.usercvv=modeOfPayment.usercvv;
    this.usercardholder=modeOfPayment.usercardholder;
    this.paymentOption=modeOfPayment.paymentOption;

  }
}
