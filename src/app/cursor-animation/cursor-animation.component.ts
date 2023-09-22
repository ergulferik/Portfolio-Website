import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor-animation',
  templateUrl: './cursor-animation.component.html',
  styleUrls: ['./cursor-animation.component.css']
})
export class CursorAnimationComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const pos = document.documentElement;
    pos.style.setProperty('--x', e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY + 'px');
  }
}
