import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {environment} from '../../environments/environment';
import {MatButtonModule} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {RouterLink} from '@angular/router';
import {Title} from '@angular/platform-browser';

interface BatchPrice {
  id: string;
  startDate: string;
  endDate: string;
  pfronParticipant: string;
  pfronCaregiver: string;
  private: string;
}

@Component({
  selector: 'app-turnusy-rehabilitacyjne',
  imports: [
    MatCardModule,
    MatButtonModule,
    NgForOf,
    MatDividerModule,
    RouterLink
  ],
  templateUrl: './turnusy-rehabilitacyjne.component.html',
  styleUrl: './turnusy-rehabilitacyjne.component.less'
})
export class TurnusyRehabilitacyjneComponent {
  batch = environment.batch;
  bank = environment.bank;
  newBank = environment.newBank;
  headers: string[] = ['', 'Data rozpoczęcia', 'Data zakończenia', 'Cena z dofinansowaniem PFRON - uczestnik',
    'Cena z dofinansowaniem PFRON - opiekun', 'Cena za pobyt prywatny bez zabiegów'];
  batchPrices: BatchPrice[] = [
    {
      id: 'Turnus I',
      startDate: '4 maj 2025',
      endDate: '17 maj 2025',
      pfronParticipant: '2390zł',
      pfronCaregiver: '2290zł',
      private: '2290zł'
    },
    {
      id: 'Turnus II',
      startDate: '18 maj 2025',
      endDate: '31 maj 2025',
      pfronParticipant: '2500zł',
      pfronCaregiver: '2390zł',
      private: '2390zł'
    },
    {
      id: 'Turnus III',
      startDate: '1 czerwiec 2025',
      endDate: '14 czerwiec 2025',
      pfronParticipant: '2500zł',
      pfronCaregiver: '2390zł',
      private: '2390zł'
    },
    {
      id: 'Turnus IV',
      startDate: '15 czerwiec 2025',
      endDate: '28 czerwiec 2025',
      pfronParticipant: '2500zł',
      pfronCaregiver: '2390zł',
      private: '2390zł'
    },
    {
      id: 'Turnus V',
      startDate: '29 czerwiec 2025',
      endDate: '12 lipiec 2025',
      pfronParticipant: '2700zł',
      pfronCaregiver: '2500zł',
      private: '2500zł'
    },
    {
      id: 'Turnus VI',
      startDate: '13 lipiec 2025',
      endDate: '26 lipiec 2025',
      pfronParticipant: '2700zł',
      pfronCaregiver: '2500zł',
      private: '2500zł'
    },
    {
      id: 'Turnus VII',
      startDate: '27 lipiec 2025',
      endDate: '9 sierpień 2025',
      pfronParticipant: '2700zł',
      pfronCaregiver: '2500zł',
      private: '2500zł'
    },
    {
      id: 'Turnus VIII',
      startDate: '10 sierpień 2025',
      endDate: '23 sierpień 2025',
      pfronParticipant: '2600zł',
      pfronCaregiver: '2400zł',
      private: '2400zł'
    },
    {
      id: 'Turnus IX',
      startDate: '24 sierpień 2025',
      endDate: '6 wrzesień 2025',
      pfronParticipant: '2600zł',
      pfronCaregiver: '2390zł',
      private: '2390zł'
    },
    {
      id: 'Turnus X',
      startDate: '7 wrzesień 2025',
      endDate: '20 wrzesień 2025',
      pfronParticipant: '2600zł',
      pfronCaregiver: '2390zł',
      private: '2390zł'
    },
    {
      id: 'Turnus XI',
      startDate: '21 wrzesień 2025',
      endDate: '4 październik 2025',
      pfronParticipant: '2500zł',
      pfronCaregiver: '2390zł',
      private: '2390zł'
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Turnusy rehabilitacyjne');
  }
}
