import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [RadioButtonModule, FileUploadModule, TableModule],
  exports: [RadioButtonModule, FileUploadModule, TableModule],
})
export class PrimeNg {}
