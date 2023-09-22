import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from '../cards.model';
import { AppService } from '../app.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adimn',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public appService: AppService) {}
  private cardsSub: Subscription = new Subscription();

  displayedColumns: string[] = [
    'title',
    'description',
    'extras',
    'continueUrl',
    'id',
    'order'
  ];

  card: Card | undefined = {
    id: '',
    title: '',
    description: '',
    continueUrl: '',
    extras: [],
    order:'',
  };

  cards: Card[] = [];

  mode = "Save Card";

  ngOnInit() {
    this.onGetCards();
    this.cardsSub = this.appService
      .getCardsListener()
      .subscribe((cards: Card[]) => {
        this.cards = cards;
      });
  }

  onSaveCard(postForm: NgForm): void {
    if (this.mode ==="Save Card") {
      this.card = {
        title: postForm.value.title,
        description: postForm.value.description,
        extras: this.stringToArr(postForm.value.extras),
        id: '',
        continueUrl: postForm.value.continueUrl,
        order:postForm.value.order
      }

      this.appService.addCard(this.card);
    } else {
      const card = {
        title: postForm.value.title,
        description: postForm.value.description,
        extras: this.stringToArr(postForm.value.extras),
        id: this.card?.id!,
        continueUrl: postForm.value.continueUrl,
        order:postForm.value.order
      };
      this.appService.Update(card, card?.id);
    }

    this.mode="Save Card"
    postForm.reset()
  }

  stringToArr(str: any): string[] {
    if (typeof str ==="string"){
      return str.split(',');
    }
    else{
      return str
    }
  }

  onGetCards() {
    this.cards = this.appService.getCards();
  }

  onDelete(id: any) {
    this.appService.Delete(id);
  }

  collapsed = false;

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  onEdit(id: string) {
    window.scrollTo(0, 0);
    this.mode = "Edit Card";
    this.card = this.cards.find((c) => c.id === id);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64Data = e.target.result.split(',')[1]; // Base64 data
      this.appService.uploadFileToBackend(base64Data);
    };
    reader.readAsDataURL(file);
  }
  

  
}
