import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


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
      const UrlsArchetypes = `${environment.apiUrl}/Archetypes/03/${num}.jpg`;
      const UrlsDeployments = `${environment.apiUrl}/Deployments/00/${num}.jpg`;
      const UrlsDrawings = `${environment.apiUrl}/Drawings+/01/${num}.jpg`;
      const UrlsTranscriptions = `${environment.apiUrl}/Transcriptions/02/${num}.jpg`;
      this.imageUrlsArchetypes.push(UrlsArchetypes);
      this.imageUrlsDeployments.push(UrlsDeployments);
      this.imageUrlsDrawings.push(UrlsDrawings);
      this.imageUrlsTranscriptions.push(UrlsTranscriptions);
    }
  }

  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1440px',
        numVisible: 4,
        numScroll: 4
    },
    
    {
      breakpoint: '820px',
      numVisible: 3,
      numScroll: 1
    },

    {
      breakpoint: '620px',
      numVisible: 2,
      numScroll: 2
  },
  
    {
        breakpoint: '412px',
        numVisible: 1,
        numScroll: 1
    }

    ];
}

}
