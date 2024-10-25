import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { EmpRegistrationComponent} from './emp-registration/emp-registration.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ComponentAComponent} from './component-a/component-a.component';
import { FormBuilder } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDescriptiponComponent } from './product-descriptipon/product-descriptipon.component';
// import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
// import { DynamicsComponent } from './dynamics/dynamics.component';
// import { AuthGuard } from './guards/authguard';
// import { ProductResolver } from './resolvers/resolversdata';
const routes: Routes = [
  //{ path: '', component:EmpRegistrationComponent}, // Default route
  // { path: 'about/:url/:status', component: Reactiveform1Component},
  // { path: 'dash', component: DashboardPageComponent, canActivate:[AuthGuard]},
  // {path: 'about/16', component:DashboardPageComponent,canActivate:[AuthGuard]},
  // {path:'contact/23', component:ComponentAComponent,canActivate:[AuthGuard]},
  { path: '',redirectTo:'/products', pathMatch:'full'},
  { path: '', component:ProductListComponent},
  { path: 'products-description/id', component:ProductDescriptiponComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
