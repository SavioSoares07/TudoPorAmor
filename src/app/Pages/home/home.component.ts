import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/core';
import rrulePlugin from '@fullcalendar/rrule';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // Corrigi de styleUrl para styleUrls
})
export class HomeComponent {
  calendarOptions: CalendarOptions | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.calendarOptions = {
        plugins: [rrulePlugin, dayGridPlugin],
        initialView: 'dayGridMonth', // Certifique-se de que esta visualização está disponível
        events: [
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-01T00:00:00',
            },
          },
        ],
        eventDisplay: 'block',
        eventColor: '#f00',
      };
    }
  }
}
