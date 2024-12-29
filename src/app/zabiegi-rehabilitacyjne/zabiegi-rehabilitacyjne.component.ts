import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-zabiegi-rehabilitacyjne',
  imports: [
    MatCardModule
  ],
  templateUrl: './zabiegi-rehabilitacyjne.component.html',
  styleUrl: './zabiegi-rehabilitacyjne.component.less'
})
export class ZabiegiRehabilitacyjneComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Zabiegi rehabilitacyjne');
  }
}
