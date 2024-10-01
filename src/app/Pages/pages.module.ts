import { NgModule } from '@angular/core';
import { AngularMaterial } from '../angular-material/angular-material.module';
import { Components } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

import { RouterModule } from '@angular/router';
import { VaccineComponent } from './vaccine/vaccine.component'; // Importando o RouterModule

@NgModule({
  declarations: [HomeComponent, DetailsComponent, VaccineComponent],
  imports: [AngularMaterial, Components, RouterModule],
  exports: [HomeComponent],
})
export class pagesModule {}
