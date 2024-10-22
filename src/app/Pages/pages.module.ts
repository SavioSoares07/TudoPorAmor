import { NgModule } from '@angular/core';
import { AngularMaterial } from '../angular-material/angular-material.module';
import { Components } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { VaccineComponent } from './vaccine/vaccine.component';
import { PrimeNg } from '../primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; // Importando FormsModule
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    VaccineComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    AngularMaterial,
    Components,
    RouterModule,
    PrimeNg,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    CommonModule,
  ], // Adicionando FormsModule
  exports: [
    HomeComponent,
    DetailsComponent,
    VaccineComponent,
    NgxPaginationModule,
    PrimeNg,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class PagesModule {}
