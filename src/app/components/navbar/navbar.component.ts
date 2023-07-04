import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  translatedItems: MenuItem[] = [];
  isMobile: boolean = false;
  showTieredMenu: boolean = false;
  currentLang = 'fr';

  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService, private library: FaIconLibrary) {
    translateService.setDefaultLang(this.currentLang);
    library.addIcons(faBars);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      { label: 'Patrick Laumond', routerLink: '/' },
      { label: 'MétaHisme', routerLink: '/metahisme' },
      { label: 'Biographie', routerLink: '/biographie' },
      { label: 'Oeuvres',  routerLink: '/oeuvre' },
      { label: 'Analyses', routerLink: '/analyses' },
    ];

    this.translateItems();

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 1024;
    }, false);

    this.isMobile = window.innerWidth < 1024;
  }

  useLanguage(language: string) {
    this.translateService.use(language);
    this.translateItems();
  }

  switchLanguage() {
    if (this.currentLang === 'fr') {
      this.translateService.use('en');
      this.currentLang = 'en';
    } else {
      this.translateService.use('fr');
      this.currentLang = 'fr';
    }

    this.translateItems();
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

