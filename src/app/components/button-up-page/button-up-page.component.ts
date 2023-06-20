import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-up-page',
  templateUrl: './button-up-page.component.html',
  styleUrls: ['./button-up-page.component.scss']
})
export class ButtonUpPageComponent {
  showBackToTopButton: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showBackToTopButton = window.scrollY > 100; // Afficher le bouton lorsque le scroll dépasse 100 pixels
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Faire une animation de scroll fluide
    });
  }
}
