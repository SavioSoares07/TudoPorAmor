import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Routes
import { HomeComponent } from './Pages/home/home.component';
import { DetailsComponent } from './Pages/details/details.component';
import path from 'path';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalhes', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
