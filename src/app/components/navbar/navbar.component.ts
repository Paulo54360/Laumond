import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  exportAs: 'navbar'
})
export class NavbarComponent {
  faBars = faBars;

  showDropdown = false;
  active = false;

  toggleBurgerMenu() {
    this.active = !this.active;
  }
}
