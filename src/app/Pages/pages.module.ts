import { NgModule } from '@angular/core';
import { AngularMaterial } from '../angular-material/angular-material.module';
import { Components } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { VaccineComponent } from './vaccine/vaccine.component';
import { PrimeNg } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms'; // Importando FormsModule

@NgModule({
  declarations: [HomeComponent, DetailsComponent, VaccineComponent],
  imports: [AngularMaterial, Components, RouterModule, PrimeNg, FormsModule], // Adicionando FormsModule
  exports: [HomeComponent, DetailsComponent, VaccineComponent],
})
export class PagesModule {}
