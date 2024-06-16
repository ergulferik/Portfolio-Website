import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ExperienceCards, ProjectCard } from '../cards.model';
import { cards, experienceData } from '../data/cardDatas';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  fullCardDescription: string = '';
  hoveredCard: ProjectCard | null = null
  projectCards: ProjectCard[] = [];
  experienceCards: ExperienceCards[] = []
  isMobile: boolean = false;
  activeSection: string = 'about-me'
  maxDescriptionLength = 240;
  cardAnimationControl = false;
  isCardOpen = false;
  interruptCardAnimation = false;
  openCardId = '';

  ngOnInit() {
    this.projectCards = cards
    this.experienceCards = experienceData

    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  cardClick(id: any, url: string, description: string) {
    if (!this.isCardOpen) {
      this.isCardOpen = true;
      this.openCardId = id;
      this.openedCardDescription(description);
    } else {
      if (url !== "null") {
        this.isCardOpen = false;
        this.openCardId = '';
        if (this.isMobile) {
          this.cardClose(id, description);
        }
      }

      if (this.isMobile) {
        this.isCardOpen = true;
        this.openCardId = id;
        this.openedCardDescription(description);
      }
    }
  }

  cardClose(id: any, description: string) {
    this.hoveredCard = null
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

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async openedCardDescription(description: string) {
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
        if (this.fullCardDescription === this.truncateDescription(description)) {
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
    //TO DO
  }


  onHeaderClick(card: ProjectCard) {
    if (card.continueUrl) {
      window.open(card.continueUrl)
    }
  }
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.clientHeight;
      const sectionBottom = sectionTop + sectionHeight;
  
      if (sectionTop <= window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
        currentSection = section.getAttribute('id') || '';
      }
    });
  
    if (!currentSection && window.scrollY < window.innerHeight / 2) {
      currentSection = sections[0]?.getAttribute('id') || '';
    }
    this.activeSection = currentSection;
  }
  
  scrollTo(section: string) {
    if (section === 'about-me') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    this.activeSection = section;
  }
  

}
