import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/core';
import rrulePlugin from '@fullcalendar/rrule';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptLocale from '@fullcalendar/core/locales/pt-br';

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
        initialView: 'dayGridMonth',
        locale: 'pt-BR',
        locales: [ptLocale],
        events: [
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-01',
            },
          },
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-02',
            },
          },
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-03',
            },
          },
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-04',
            },
          },
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-05',
            },
          },
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-06',
            },
          },
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-07',
            },
          },
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-08',
            },
          },
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-09',
            },
          },
          {
            title: 'Data de vacinação',
            rrule: {
              freq: 'yearly',
              dtstart: '2024-11-10',
            },
          },
        ],
        eventDisplay: 'block',
        eventColor: '#5f5f5f',
      };
    }
  }
}
