import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GetsDataService {

  constructor(private http:HttpClient) {
    // console.log(this.fetchProductData());
   }
  //  fetchProductData(){
  //   return this.http.get<any>("https://fakestoreapi.com/products")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }));
  // }
  fetchProductData(){
    return this.http.get("https://fakestoreapi.com/products");
    
  }

  fetchSingleProduct(id){
    return this.http.get("https://fakestoreapi.com/products/"+id);
  }
}
