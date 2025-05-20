import {Component, ElementRef, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bip',
  imports: [],
  templateUrl: './bip.component.html',
  styleUrl: './bip.component.less'
})
export class BipComponent {

  @ViewChild("beachRegulation") beachRegulationEl: ElementRef | undefined;

  constructor(private titleService: Title) {
    this.titleService.setTitle('BIP');
  }

  moveToBeachRegulation() {
    this.beachRegulationEl?.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
  }
}
