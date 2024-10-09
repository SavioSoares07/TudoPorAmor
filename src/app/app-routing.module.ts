import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importação dos componentes
import { HomeComponent } from './Pages/home/home.component';
import { DetailsComponent } from './Pages/details/details.component';
import { VaccineComponent } from './Pages/vaccine/vaccine.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalhes', component: DetailsComponent },
  { path: 'vacina', component: VaccineComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
