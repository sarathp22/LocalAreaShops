import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { ShopSigninComponent } from './shop-signin/shop-signin.component';
import { ShopSignupComponent } from './shop-signup/shop-signup.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [{path:'home1',component:Home1Component},
                        {path:'shopSignup',component:ShopSignupComponent},
                        {path:'shopSignin',component:ShopSigninComponent},
                        {path:'userSignup',component:UserSignupComponent},
                        {path:'userSignin',component:UserSigninComponent},
                        {path:'',redirectTo:'home1',pathMatch:'full'}                                        
                                                                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
