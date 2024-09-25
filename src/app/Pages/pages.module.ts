import { NgModule } from '@angular/core';
import { AngularMaterial } from '../angular-material/angular-material.module';
import { Components } from '../components/components.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [AngularMaterial, Components],
  exports: [HomeComponent],
})
export class pagesModule {}
