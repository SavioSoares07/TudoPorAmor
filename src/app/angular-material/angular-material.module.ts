import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
  ],
})
export class AngularMaterial {}
