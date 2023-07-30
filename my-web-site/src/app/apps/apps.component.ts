import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.services';
import { Subject, Subscription } from 'rxjs';
import { Card } from '../cards.model';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css'],
})
export class AppsComponent implements OnInit {
  constructor(private appService: AppService) {}
  cards: Card[] = [];
  private cardsSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.cardsSub = this.appService.getCardsListener().subscribe((cards) => {
      this.cards = cards;
    });
    this.appService.getCards();
  }

  cardClick(url: String) {}
}
