import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  imports: [RadioButtonModule, FileUploadModule],
  exports: [RadioButtonModule, FileUploadModule],
})
export class PrimeNg {}
