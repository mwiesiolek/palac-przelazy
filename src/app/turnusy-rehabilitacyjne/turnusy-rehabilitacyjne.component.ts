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
      startDate: '17 maj 2026',
      endDate: '30 maj 2026',
      pfronParticipant: '2600zł*',
      pfronCaregiver: '2400zł',
      private: '2400zł'
    },
    {
      id: 'Turnus II',
      startDate: '31 maj 2026',
      endDate: '13 czerwiec 2026',
      pfronParticipant: '2700zł*',
      pfronCaregiver: '2500zł',
      private: '2500zł'
    },
    {
      id: 'Turnus III',
      startDate: '14 czerwiec 2026',
      endDate: '27 czerwiec 2026',
      pfronParticipant: '2700zł*',
      pfronCaregiver: '2500zł',
      private: '2500zł'
    },
    {
      id: 'Turnus IV',
      startDate: '28 czerwiec 2026',
      endDate: '11 lipiec 2026',
      pfronParticipant: '2900zł',
      pfronCaregiver: '2700zł',
      private: '2650zł'
    },
    {
      id: 'Turnus V',
      startDate: '12 lipiec 2026',
      endDate: '25 lipiec 2026',
      pfronParticipant: '2900zł',
      pfronCaregiver: '2700zł',
      private: '2650zł'
    },
    {
      id: 'Turnus VI',
      startDate: '26 lipiec 2026',
      endDate: '8 sierpień 2026',
      pfronParticipant: '2900zł',
      pfronCaregiver: '2700zł',
      private: '2650zł'
    },
    {
      id: 'Turnus VII',
      startDate: '9 sierpień 2026',
      endDate: '22 sierpień 2026',
      pfronParticipant: '2900zł',
      pfronCaregiver: '2700zł',
      private: '2650zł'
    },
    {
      id: 'Turnus VIII',
      startDate: '23 sierpień 2026',
      endDate: '5 wrzesień 2026',
      pfronParticipant: '2800zł',
      pfronCaregiver: '2500zł',
      private: '2500zł'
    },
    {
      id: 'Turnus IX',
      startDate: '6 wrzesień 2026',
      endDate: '19 wrzesień 2026',
      pfronParticipant: '2800zł',
      pfronCaregiver: '2500zł',
      private: '2500zł'
    },
    {
      id: 'Turnus X',
      startDate: '20 wrzesień 2026',
      endDate: '3 październik 2026',
      pfronParticipant: '2700zł*',
      pfronCaregiver: '2500zł',
      private: '2500zł'
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Turnusy rehabilitacyjne');
  }
}
