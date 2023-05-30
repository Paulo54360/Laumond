import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-oeuvre',
  templateUrl: './oeuvre.component.html',
  styleUrls: ['./oeuvre.component.scss'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }],

})
export class OeuvreComponent {
  currentImageIndex: number | null = null;
  imageUrlsArchetypes: string[] = [];
  imageUrlsDeployments: string[] = [];
  imageUrlsDrawings: string[] = [];
  imageUrlsTranscriptions: string[] = [];


  constructor() {
    for (let i = 1; i <= 10; i++) {
      const num = i.toString().padStart(2, '0');
      const UrlsArchetypes = `api/Archetypes/02/${num}.jpg`;
      const UrlsDeployments = `api/Deployments/02/${num}.jpg`;
      const UrlsDrawings = `api/Drawings/02/${num}.jpg`;
      const UrlsTranscriptions = `api/Transcriptions/02/${num}.jpg`;
      this.imageUrlsArchetypes.push(UrlsArchetypes);
      this.imageUrlsDeployments.push(UrlsDeployments);
      this.imageUrlsDrawings.push(UrlsDrawings);
      this.imageUrlsTranscriptions.push(UrlsTranscriptions);
    }
  }
}
