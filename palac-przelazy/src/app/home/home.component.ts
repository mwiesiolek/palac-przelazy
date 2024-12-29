import { Component } from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {OurOfferComponent} from '../our-offer/our-offer.component';

@Component({
  selector: 'app-home',
  imports: [
    CarouselComponent,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    OurOfferComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
