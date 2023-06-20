import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  translatedItems: MenuItem[] = [];
  visibleSidebar: boolean = false;
  isMobile: boolean = false;
  currentLang = 'fr';

  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService) {
    translateService.setDefaultLang(this.currentLang);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      { label: 'Patrick Laumond', routerLink: '' },
      { label: 'MétaHisme', routerLink: '/metahisme' },
      { label: 'Oeuvres',  routerLink: '/oeuvre' },
      { label: 'Biographie', routerLink: '/biographie' },
      { label: 'Analyses', routerLink: '/analyses' },
    
      // { label: 'Actualités',  routerLink: '/news' }
    ];

    this.translateItems(); // Traduire les labels initiaux

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    }, false);

    this.isMobile = window.innerWidth < 760;
  }

  useLanguage(language: string) {
    this.translateService.use(language);
    this.translateItems(); // Réappliquer la traduction lorsque la langue est changée
  }

  switchLanguage() {
    if (this.currentLang === 'fr') {
      this.translateService.use('en');
      this.currentLang = 'en';
    } else {
      this.translateService.use('fr');
      this.currentLang = 'fr';
    }

    this.translateItems(); // Réappliquer la traduction lorsque la langue est changée
  }

  translateItems() {
    this.translateService.get('navbar').subscribe((translations: any) => {
      this.translatedItems = this.items.map(item => ({
        ...item,
        label: translations[item.label!] || item.label
      }));
    });
  }
}
