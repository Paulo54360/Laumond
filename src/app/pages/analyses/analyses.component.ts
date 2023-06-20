import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Titles {
  [key: string]: string;
}

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.scss']
})
export class AnalysesComponent {
  currentImageIndex: number | null = null;
  imageUrls: string[] = [];
  imageUrls2: string[] = [];
  titles: Titles = {};

  constructor() { }

  ngOnInit() {
    this.loadDeployments();
  }

  async loadDeployments() {
        const imageUrl1 = `${environment.apiUrl}/Deployments/06/02.jpg`;
        const imageUrl2 = `${environment.apiUrl}/Deployments/06/04.jpg`;
        const imageUrl3 = `${environment.apiUrl}/Deployments/06/06.jpg`;
        this.imageUrls2.push(imageUrl3);
        this.imageUrls.push(imageUrl1, imageUrl2);
  }

  fetchTextContent(url: string): Promise<string> {
    return fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsText(blob, 'utf-8');
      }))
      .catch(error => {
        console.error(`Erreur lors de la récupération du contenu du fichier ${url}:`, error);
        throw new Error('Erreur lors de la récupération du contenu du fichier');
      });
  }



  openModal(index: number) {
    this.currentImageIndex = index;
  }

  closeModal() {
    this.currentImageIndex = null;
  }
}
