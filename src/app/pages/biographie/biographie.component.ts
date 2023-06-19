import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.scss']
})
export class BiographieComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const links = this.elementRef.nativeElement.querySelectorAll('a[href^="#"]');

    links.forEach((link: { addEventListener: (arg0: string, arg1: (event: any) => void) => void; getAttribute: (arg0: string) => string; }) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = this.elementRef.nativeElement.querySelector(`#${targetId}`);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

}