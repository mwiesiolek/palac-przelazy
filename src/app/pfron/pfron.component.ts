import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {environment} from '../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-pfron',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle
    ],
  templateUrl: './pfron.component.html',
  styleUrl: './pfron.component.less'
})
export class PfronComponent {
  batch = environment.batch;
  address = environment.address;

  constructor(private titleService: Title) {
    this.titleService.setTitle('PFRON');
  }
}
