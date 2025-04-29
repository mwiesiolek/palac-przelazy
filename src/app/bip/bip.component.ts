import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-bip',
  imports: [],
  templateUrl: './bip.component.html',
  styleUrl: './bip.component.less'
})
export class BipComponent {

  @ViewChild("beachRegulation") beachRegulationEl: ElementRef | undefined;

  moveToBeachRegulation() {
    this.beachRegulationEl?.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
  }
}
