import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Home1Component } from './home1/home1.component';
import { ShopSignupComponent } from './shop-signup/shop-signup.component';
import { ShopSigninComponent } from './shop-signin/shop-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopSelectComponent } from './shop-select/shop-select.component';
import { SelectTokenComponent } from './select-token/select-token.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Home1Component,
    ShopSignupComponent,
    ShopSigninComponent,
    UserSignupComponent,
    UserSigninComponent,
    ShopListComponent,
    ShopSelectComponent,
    SelectTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
