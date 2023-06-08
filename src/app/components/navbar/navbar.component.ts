// import { Component, HostListener, OnInit } from '@angular/core';
// import { Subject } from 'rxjs';
// import { debounceTime } from 'rxjs/operators';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss'],
//   exportAs: 'navbar'
// })

// export class NavbarComponent implements OnInit {
//   faBars = faBars;

//   items = [
//     {label: 'MétaHisme', routerLink: '/metahisme'},
//     {label: 'Œuvre', routerLink: '/oeuvre'},
//     {label: 'Actualité', routerLink: '/news'},
//     {label: 'Biographie', routerLink: '/biographie'}
//   ];

//   isMobile!: boolean;
//   visibleSidebar!: boolean;

//   resize$ = new Subject<void>();

//   constructor() {
//     this.resize$.pipe(debounceTime(200)).subscribe(() => this.checkIfMobile());
//   }

//   ngOnInit() {
//     this.checkIfMobile();
//   }

//   @HostListener('window:resize')
//   onResize() {
//     this.resize$.next();
//   }

//   private checkIfMobile() {
//     this.isMobile = window.innerWidth >= 900;  // change 768 to the breakpoint you want
//   }
// }

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
      {label: 'Actualité', routerLink: '/news'},
      {label: 'Biographie', routerLink: '/biographie'}
    ];

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 1024;
    }, false);

    this.isMobile = window.innerWidth < 1024;
  }
}
