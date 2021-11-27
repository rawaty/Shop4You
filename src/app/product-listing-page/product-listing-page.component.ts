import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { GetsDataService } from '../services/gets-data.service';

@Component({
  selector: 'app-product-listing-page',
  templateUrl: './product-listing-page.component.html',
  styleUrls: ['./product-listing-page.component.css']
})
export class ProductListingPageComponent implements OnInit {

  productDetails:any;
  searchKey:string="";
  

  constructor(private data:GetsDataService,private cartService:CartService) { 
   
  }

  ngOnInit(): void {
    this.data.fetchProductData().subscribe(response=>{
      this.productDetails=response;

      this.productDetails.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey=val;
      // console.log(val);
    })
  }

  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }

 

}
