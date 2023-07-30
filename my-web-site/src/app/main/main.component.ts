import { Component, OnInit } from '@angular/core';
import { Card } from '../cards.model';
import { AppService } from '../app.services';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    // Animasyon tanımı
    trigger('smoothResize', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }), // Başlangıç stil
        animate('300ms ease-out', style({ height: '*', opacity: 1 })), // Bitiş stil ve animasyon süresi
      ]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  constructor(
    public appService: AppService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}
  private cardsSub: Subscription = new Subscription();

  cards: Card[] = [];

  maxLength = 240;
  isCardOpen = false;
  openCardId = '';

  ngOnInit() {
    this.cardsSub = this.appService.getCardsListener().subscribe((cards) => {
      this.cards = cards;
    });

    this.appService.getCards();
  }

  cardClick(id: any,url:string) {
    if (this.isCardOpen) {
      window.open(url)
      this.isCardOpen = false;
      this.openCardId = '';
    } else {
      this.isCardOpen = true;
      this.openCardId = id;
    }
  }
  mouseLeaveOnCard(id:string){
    if (id == this.openCardId){
      this.isCardOpen = false;
      this.openCardId = '';
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  truncateDescription(description: string, id: string): string {
    this.maxLength = 240;

    if (!this.isCardOpen && this.openCardId === '') {
      if (description.length <= this.maxLength) {
        return description;
      } else {
        return description.slice(0, this.maxLength) + '...';
      }
    } else if (this.isCardOpen && this.openCardId === id) {
      return description;
    } else if (this.isCardOpen && this.openCardId !== id) {
      if (description.length <= this.maxLength) {
        return description;
      } else {
        return description.slice(0, this.maxLength) + '...';
      }
    } else {
      return '';
    }
  }

  onMoreClick(url: string) {
    window.location.href = url;
  }
}
