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
  imageUrls3: string[] = [];
  imageUrls4: string[] = [];
  titles: Titles = {};

  constructor() { }

  ngOnInit() {
    this.loadDeployments();
  }

  async loadDeployments() {
        const imageUrl1 = `${environment.apiUrl}/Deployments/00/02.jpg`;
        const imageUrl2 = `${environment.apiUrl}/Deployments/00/04.jpg`;
        const imageUrl3 = `${environment.apiUrl}/Deployments/00/06.jpg`;
        const imageUrl4 = `${environment.apiUrl}/Deployments/00/08.jpg`;
        const imageUrl5 = `${environment.apiUrl}/Deployments/00/09.jpg`;
        const imageUrl6 = `${environment.apiUrl}/Deployments/00/10.jpg`;
        this.imageUrls3.push(imageUrl4, imageUrl5);
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
