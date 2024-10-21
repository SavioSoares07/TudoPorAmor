import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  imports: [
    RadioButtonModule,
    FileUploadModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
  ],
  exports: [
    RadioButtonModule,
    FileUploadModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
  ],
})
export class PrimeNg {}
