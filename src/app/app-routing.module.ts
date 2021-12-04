import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { ShirtComponent } from './product/shirt/shirt.component';
import { TshirtComponent } from './product/tshirt/tshirt.component';
import {LandingPageComponent} from './landing-page/landing-page.component'

const routes: Routes = [
  {path:'', redirectTo:'landing-page', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent, children:[
    
    {path:'laptop',component:LaptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'shirt',component:ShirtComponent},
    {path:'tshirt',component:TshirtComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
