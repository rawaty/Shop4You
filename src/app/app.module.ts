import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { HelpComponent } from './help/help.component';
import { ProductListingPageComponent } from './product-listing-page/product-listing-page.component';
import { ProductDescriptionPageComponent } from './product-description-page/product-description-page.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import {  HttpClientModule } from '@angular/common/http';
import { ShortenPipePipe } from './pipes/shorten-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    HelpComponent,
    ProductListingPageComponent,
    ProductDescriptionPageComponent,
    CartComponent,
    ShoppingCartComponent,
    ShippingDetailsComponent,
    PaymentOptionsComponent,
    ProductSummaryComponent,
    ShortenPipePipe,
    OrderpageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
