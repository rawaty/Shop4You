import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // searchKey:string="";
  public searchTerm !:string;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
