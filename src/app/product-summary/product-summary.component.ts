import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {
  public products:any=[];
  public grandTotal:number=0;
  public coupon:string;
  public total:number;
  public tax:number=0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products=res;

      this.grandTotal=this.cartService.getTotalPrice();
     
      this.calculatingTax(this.grandTotal);
      this.total=this.grandTotal+this.tax;
      // console.log(res)
    })
  }
 onUpdateTotalAfterCoupon(couponCode:Event){
   
    this.coupon=(<HTMLInputElement>couponCode.target).value;
    if(this.coupon=="BOOTCAMP2021" || this.coupon=="bootcamp2021"){
      this.total=this.grandTotal-(0.1*this.grandTotal)+this.tax;
    }
    else{
      this.total=this.grandTotal+this.tax;
    }
 }

 calculatingTax(grandTotal:number){
    return this.tax=Math.round(0.2*grandTotal);
    
 }

}
