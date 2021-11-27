import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { ProductDescriptionPageComponent } from './product-description-page/product-description-page.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'shop',component:ShopComponent},
  {path:'help',component:HelpComponent},
  {path:'description',component:ProductDescriptionPageComponent},
  {path:'description/:id',component:ProductDescriptionPageComponent},
  {path:'cart',component:CartComponent,children:[
    {path:'shoppingcart',component:ShoppingCartComponent},
    {path:'shippingdetails',component:ShippingDetailsComponent},
    {path:'paymentoptions',component:PaymentOptionsComponent}
  ]},
  {path:'orderpage',component:OrderpageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
