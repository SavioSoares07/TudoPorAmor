import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@NgModule({
  imports: [
    RadioButtonModule,
    FileUploadModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
    ConfirmPopupModule
  ],
  exports: [
    RadioButtonModule,
    FileUploadModule,
    TableModule,
    TabViewModule,
    ButtonModule,
    DropdownModule,
    ConfirmPopupModule
  ],
})
export class PrimeNg {}
