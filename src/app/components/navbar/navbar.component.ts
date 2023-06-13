import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
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

  constructor(private primengConfig: PrimeNGConfig) {}

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
}
