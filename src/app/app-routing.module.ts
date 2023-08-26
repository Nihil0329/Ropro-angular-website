import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanderComponent } from './pages/lander/lander.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartsComponent } from './pages/carts/carts.component';
import { DisplayComponent } from './pages/display/display.component';
import { PaymentComponent } from './pages/payment/payment.component';
const routes: Routes = [
  { path:'',component: LanderComponent },
  { path:'search/:searchTerm', component: DisplayComponent},
  { path:'contact',component:ContactComponent },
  { path:'facilities',component:FacilitiesComponent},
  { path:'login',component:LoginComponent},
  { path:'product',component:ProductsComponent },
  { path:'register',component:RegisterComponent },
  { path:'cart',component:CartsComponent },
  { path:'display',component:DisplayComponent },
  { path:'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
