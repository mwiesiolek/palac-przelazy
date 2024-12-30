import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {KontaktComponent} from "./kontakt/kontakt.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {environment} from '../environments/environment';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,
    KontaktComponent, MatToolbarModule,
    MatIconModule, MatSidenavModule,
    MatButtonModule, MatSidenavModule,
    MatListModule, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'palac-przelazy';
  batch = environment.batch;
  address = environment.address;

  constructor(public router: Router) {
  }
}
