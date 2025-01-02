import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {interval, repeat, Subject, takeUntil, tap} from 'rxjs';

interface Item {
  title: string;
  id: number;
  slideControl: string;
  imgUrl: string;
  content: string;
  link: string;
  textLink: string;
}

@Component({
  selector: 'app-carousel',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    RouterLink,
    NgForOf
  ],
  animations: [
    trigger('fade', [
      state('in', style({opacity: .9})),
      state('out', style({opacity: .5})),
      transition('void=>in', [animate('700ms ease-in')]),
      transition('void=>out', [animate('700ms ease-in')]),
      transition('*=>in', [animate('700ms ease-in')]),
      transition('*=>out', [animate('700ms ease-in')]),
      transition('in<=>out', [animate('700ms ease-in')]),
    ])
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.less'
})
export class CarouselComponent implements OnInit, OnDestroy {

  items: Item[] = [
    {
      id: 1,
      title: 'Zabiegi rehabilitacyjne w ramach PFRON',
      slideControl: 'in',
      imgUrl: '/kDSC_7864-1/kDSC_7864-1-768x513.jpg',
      content: 'Turnusy rehabilitacyjne dla osób niepełnosprawnych w ramach PFON.',
      link: '/pfron',
      textLink: 'Turnusy PFRON'
    },
    {
      id: 2,
      title: 'Turnusy rehabilitacyjne tuż nad jeziorem',
      slideControl: 'out',
      imgUrl: '/Zrzut-ekranu-2021-06-15-o-13.27.26/Zrzut-ekranu-2021-06-15-o-13.27.26-768x511.jpg',
      content: 'W pięknym otoczeniu przyrody, tuż nad jeziorem Niesłysz. Tutaj z pewnością odzyskasz utracone siły.',
      link: '/turnusy-rehabilitacyjne',
      textLink: 'Turnusy rehabilitacyjne'
    },
    {
      id: 3,
      title: 'Zabiegi rehabilitacyjne w pięknym otoczeniu',
      slideControl: 'out',
      imgUrl: '/Zrzut-ekranu-2021-06-15-o-13.01.47/Zrzut-ekranu-2021-06-15-o-13.01.47-768x428.jpg',
      content: 'Bogata oferta zabiegów rehabilitacyjnych w trybie dziennym lub z noclegiem. Skorzystaj z naszej oferty.',
      link: '/zabiegi-rehabilitacyjne',
      textLink: 'Zabiegi rehabilitacyjne'
    }
  ];

  stop$ = new Subject<void>();
  start$ = new Subject<void>();

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  ngOnInit(): void {
    interval(10000).pipe(
      takeUntil(this.stop$),
      repeat({delay: () => this.start$}),
      tap(() => {
        let current = this.items.find(i => i.slideControl === 'in');
        if (current) this.next(current);
      })
    ).subscribe();
  }

  previous(current: Item) {
    this.restartInterval();

    current.slideControl = 'out';
    if (current.id === 1) {
      this.items[this.items.length - 1].slideControl = 'in';
    } else {
      let newItem = this.items.find(i => i.id === current.id - 1);
      if (newItem) newItem.slideControl = 'in';
    }
  }

  next(current: Item) {
    this.restartInterval();

    current.slideControl = 'out';
    if (current.id === this.items[this.items.length - 1].id) {
      this.items[0].slideControl = 'in';
    } else {
      let newItem = this.items.find(i => i.id === current.id + 1);
      if (newItem) newItem.slideControl = 'in';
    }
  }

  private restartInterval() {
    this.stop$.next();
    this.start$.next();
  }
}
