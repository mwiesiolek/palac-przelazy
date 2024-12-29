import {Component} from '@angular/core';
import {MatCard, MatCardHeader, MatCardModule, MatCardTitle} from "@angular/material/card";
import {OurOfferComponent} from '../our-offer/our-offer.component';

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

}
