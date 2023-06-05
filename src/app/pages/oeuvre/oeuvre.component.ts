import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-oeuvre',
  templateUrl: './oeuvre.component.html',
  styleUrls: ['./oeuvre.component.scss'],
})
export class OeuvreComponent {
  currentImageIndex: number | null = null;
  imageUrlsArchetypes: string[] = [];
  imageUrlsDeployments: string[] = [];
  imageUrlsDrawings: string[] = [];
  imageUrlsTranscriptions: string[] = [];
  responsiveOptions: any[] = [];


  constructor() {
    
    for (let i = 1; i <= 4; i++) {
      const num = i.toString().padStart(2, '0');
      const UrlsArchetypes = `api/Archetypes/03/${num}.jpg`;
      const UrlsDeployments = `api/Deployments/01/${num}.jpg`;
      const UrlsDrawings = `api/Drawings+/01/${num}.jpg`;
      const UrlsTranscriptions = `api/Transcriptions/02/${num}.jpg`;
      this.imageUrlsArchetypes.push(UrlsArchetypes);
      this.imageUrlsDeployments.push(UrlsDeployments);
      this.imageUrlsDrawings.push(UrlsDrawings);
      this.imageUrlsTranscriptions.push(UrlsTranscriptions);
    }
  }

  ngOnInit() {

    this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '1220px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '1100px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}

}
