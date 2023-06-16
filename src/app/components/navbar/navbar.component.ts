import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];
  visibleSidebar: boolean = false;
  isMobile: boolean = false;
  currentLang = 'fr';

  constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService) {
    translate.setDefaultLang(this.currentLang);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {label: 'MétaHisme', routerLink: '/metahisme'},
      {label: 'Œuvre', routerLink: '/oeuvre'},
      {label: 'Biographie', routerLink: '/biographie'},
      {label: 'Actualité', routerLink: '/news'}
    ];

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    }, false);

    this.isMobile = window.innerWidth < 760;
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  switchLanguage() {
    if (this.currentLang == 'fr') {
      this.translate.use('en');
      this.currentLang = 'en';
    } else {
      this.translate.use('fr');
      this.currentLang = 'fr';
    }
  }
  
}
