import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FomvalidationComponent } from './fomvalidation/fomvalidation.component';
import { DemopipescomponentComponent } from './demopipescomponent/demopipescomponent.component';
import { ExpopipePipe } from './expopipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { Serviceuser1Component } from './serviceuser1/serviceuser1.component';
import { Serviceuser2Component } from './serviceuser2/serviceuser2.component';
import { CaluculationsComponent } from './caluculations/caluculations.component';
import { FormsComponent } from './forms/forms.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CustomvalidatorComponent } from './customvalidator/customvalidator.component';
import { HttptalksComponent } from './httptalks/httptalks.component';
import { ServicecollectionsComponent } from './servicecollections/servicecollections.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDescriptiponComponent } from './product-descriptipon/product-descriptipon.component';


@NgModule({
  declarations: [
    AppComponent,
    FomvalidationComponent,
    DemopipescomponentComponent,
    ExpopipePipe,
    FormcomponentComponent,
    Serviceuser1Component,
    Serviceuser2Component,
    CaluculationsComponent,
    FormsComponent,
    TemplatedrivenformComponent,
    EmpRegistrationComponent,
    StudentRegistrationComponent,
    CustomvalidatorComponent,
    HttptalksComponent,
    ServicecollectionsComponent,
    DashboardPageComponent,
    ComponentAComponent,
    ComponentBComponent,
    ProductListComponent,
    ProductDescriptiponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
