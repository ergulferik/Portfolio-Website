import { Injectable } from '@angular/core';
import { Card } from './cards.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Subject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  private cardsUpdated = new Subject<Card[]>();
  pdfSafeUrl: SafeResourceUrl | undefined;
  pdfData: any;
  cards: Card[] = [];

  addCard(card: Card) {
    this.http
      .post<{ cardId: string }>('http://localhost:3000/api/cards', card)
      .subscribe((responseData) => {
        const id = responseData.cardId;
        card.id = id;
        this.cards.push(card);
        this.cardsUpdated.next([...this.cards]);
      });
  }
  loadRoot() {
    this.router.navigate(['/']);
  }

  getCards(): Card[] {
    this.http
      .get<{
        cards: any;
      }>('http://localhost:3000/api/cards')
      .pipe(
        map((cardData) => {
          return cardData.cards.map(
            (card: {
              title: any;
              description: any;
              _id: any;
              extras: any;
              continueUrl: any;
              order: any;
            }) => {
              return {
                title: card.title,
                description: card.description,
                id: card._id,
                extras: card.extras,
                continueUrl: card.continueUrl,
                order: card.order,
              };
            }
          );
        })
      )
      .subscribe((allCards) => {
        this.cards = allCards;
        this.cardsUpdated.next([...this.cards]);
      });
    return this.cards;
  }

  getCardsListener() {
    return this.cardsUpdated.asObservable();
  }

  Delete(id: any) {
    this.http
      .delete('http://localhost:3000/api/cards/' + id)
      .subscribe((response) => {
        const updatedCards = this.cards.filter((card) => card.id !== id);
        this.cards = updatedCards;
        this.cardsUpdated.next([...this.cards]);
      });
  }

  Update(card: Card, id: string) {
    this.http
      .put('http://localhost:3000/api/cards/' + id, card)
      .subscribe((res) => {
        const updatedCards = [...this.cards];
        const oldCardIndex = updatedCards.findIndex((c) => c.id === id);
        updatedCards[oldCardIndex] = card;
        this.cards = updatedCards;
        this.cardsUpdated.next([...this.cards]);
      });
  }
  uploadFileToBackend(base64Data: string) {
    this.http.post('http://localhost:3000/api/cv/', { base64Data }).subscribe(
      (response) => {
        console.log('File uploaded successfully.');
      },
      (error) => {
        console.error('Error uploading file:', error);
      }
    );
  }

  getFile() {
    this.http.get('http://localhost:3000/api/cv/').subscribe(
      (response: any) => {
        this.pdfData = response.base64Data;
        this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'data:application/pdf;base64,' + this.pdfData
        );
      },
      (error) => {
        console.error('Error getting file:', error);
      }
    );
  }
}
