import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { GetsDataService } from '../services/gets-data.service';

@Component({
  selector: 'app-product-description-page',
  templateUrl: './product-description-page.component.html',
  styleUrls: ['./product-description-page.component.css']
})
export class ProductDescriptionPageComponent implements OnInit {
  item:any;

  constructor(private activatedRouter:ActivatedRoute,private _du:GetsDataService,private cartService:CartService) {
   
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(param=>{
      let pid=+param.get('id');
      this._du.fetchSingleProduct(pid).subscribe(res=>{
        console.log(res);
         this.item=res;
      })
    })
   }
   addtoCart(item:any){
    this.cartService.addtoCart(item);
  }
}
