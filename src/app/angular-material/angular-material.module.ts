import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule],
  exports: [MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule],
})
export class AngularMaterial {}
