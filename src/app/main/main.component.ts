import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Card } from '../cards.model';
import { AppService } from '../app.services';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(
    public appService: AppService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}
  private cardsSub: Subscription = new Subscription();

  fullCardDescription: string = '';

  cards: Card[] = [];

  maxDescriptionLength = 240;
  cardAnimationControl = false;
  isCardOpen = false;
  interruptCardAnimation=false;
  openCardId = '';

  ngOnInit() {
    this.cardsSub = this.appService.getCardsListener().subscribe((cards) => {
      this.cards = cards;
    });
    this.appService.getFile();
    this.appService.getCards();
  }

  cardClick(id: any, url: string, description: string) {
    if (!this.isCardOpen) {
      this.isCardOpen = true;
      this.openCardId = id;
      this.openedCardDesription(description);
    } else {
      if (url !== "null") {
        this.isCardOpen = false;
        this.openCardId = '';
        window.open(url);
      }
    }
  }

  cardClose(id: any, url: string, description: string) {
    if (id == this.openCardId) {
      this.interruptCardAnimation = true;
      this.closedCardDescription(description);
    }
  }

  truncateDescription(description: string): string {
    this.maxDescriptionLength = 240;

    if (description.length <= this.maxDescriptionLength) {
      return description;
    } else {
      return description.slice(0, this.maxDescriptionLength);
    }
  }
  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async openedCardDesription(description: string) {
    if (this.isCardOpen) {
      this.cardAnimationControl = false;
      this.fullCardDescription = this.truncateDescription(description);
      for (let i = this.maxDescriptionLength; i < description.length; i++) {
        
        if (this.isCardOpen && !this.interruptCardAnimation) {
          this.fullCardDescription += description[i];
          await this.delay(0.01);
        } else {
          break;
        }
      }
    }
  }
  async closedCardDescription(description: string) {
    if (!this.cardAnimationControl) {
      this.cardAnimationControl = true;
      for (let i = description.length; i > this.maxDescriptionLength; i--) {
        this.fullCardDescription = this.fullCardDescription.slice(0, -1);
        if(this.fullCardDescription === this.truncateDescription(description)){
          break;
        }
        await this.delay(0.01);
      }

      this.isCardOpen = false;
      this.openCardId = '';
      this.interruptCardAnimation = false;
    }
  }
  downloadCV() {
    this.appService.getFile();
  }

  ngOnDestroy() {
    this.cardsSub.unsubscribe();
  }
}
