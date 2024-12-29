import { Component } from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {OurOfferComponent} from '../our-offer/our-offer.component';
import {Title} from '@angular/platform-browser';

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
  constructor(private titleService: Title) {
    this.titleService.setTitle('Strona główna');
  }
}
