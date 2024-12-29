import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-atrakcje-w-poblizu',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle
    ],
  templateUrl: './atrakcje-w-poblizu.component.html',
  styleUrl: './atrakcje-w-poblizu.component.less'
})
export class AtrakcjeWPoblizuComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Atrakcje w pobliżu');
  }
}
