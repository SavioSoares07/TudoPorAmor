import { Component } from '@angular/core';

//? Type Calendar
import { CalendarOptions } from '@fullcalendar/core/index.js';
import rrulePlugin from '@fullcalendar/rrule';
import dayGridPlugin from '@fullcalendar/daygrid'; // Importação do plugin dayGrid

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  calendarOptions: CalendarOptions = {
    plugins: [rrulePlugin, dayGridPlugin],
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-01T00:00:00',
        },
      },
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-02T00:00:00',
        },
      },
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-03T00:00:00',
        },
      },
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-04T00:00:00',
        },
      },
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-05T00:00:00',
        },
      },
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-06T00:00:00',
        },
      },
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-07T00:00:00',
        },
      },
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-08T00:00:00',
        },
      },
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-09T00:00:00',
        },
      },
      {
        title: 'Data de vacinação',
        rrule: {
          freq: 'yearly',
          dtstart: '2024-11-10T00:00:00',
        },
      },
    ],
    eventDisplay: 'block',
    eventColor: '#f00',
  };
}
