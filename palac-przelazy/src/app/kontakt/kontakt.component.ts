import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.less'
})
export class KontaktComponent {
  bank = environment.bank;
  batch = environment.batch;
  rehabilitiation = environment.rehabilitiation;
  address = environment.address;
}
