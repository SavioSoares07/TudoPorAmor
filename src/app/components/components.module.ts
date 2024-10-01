import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconInstagramComponent } from './icon-instagram/icon-instagram.component';

//? Calendar import
import { FullCalendarModule } from '@fullcalendar/angular';
import { HeaderLiteComponent } from './header-lite/header-lite.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IconInstagramComponent,
    HeaderLiteComponent,
  ],
  exports: [
    HeaderComponent,
    HeaderLiteComponent,
    FooterComponent,
    IconInstagramComponent,
    FullCalendarModule,
  ],
})
export class Components {}
