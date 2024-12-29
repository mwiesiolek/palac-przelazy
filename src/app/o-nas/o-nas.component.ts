import {Component} from '@angular/core';
import {MatCard, MatCardHeader, MatCardModule, MatCardTitle} from "@angular/material/card";
import {OurOfferComponent} from '../our-offer/our-offer.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-o-nas',
  imports: [
    MatCardModule,
    OurOfferComponent
  ],
  templateUrl: './o-nas.component.html',
  styleUrl: './o-nas.component.less'
})
export class ONasComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('O nas');
  }
}
