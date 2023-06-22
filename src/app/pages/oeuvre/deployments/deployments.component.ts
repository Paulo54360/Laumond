import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Titles {
  [key: string]: string;
}


@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.scss']
})
export class DeploymentsComponent {
  currentImageIndex: number | null = null;
  imageUrls: string[] = [];
  titles: Titles = {};

  constructor() { }

  ngOnInit() {
    this.loadDeployments();
  }

  async loadDeployments() {
    const subfolders = ['01', '02', '03', '04', '05', '06'];
    const fileRanges = [[1, 4], [1, 3], [1, 6], [1, 2], [1, 4], [1,7]]; // Plage de boucle pour chaque sous-dossier

    for (let i = 0; i < subfolders.length; i++) {
      const subfolder = subfolders[i];
      const range = fileRanges[i];

      for (let j = range[0]; j <= range[1]; j++) {
        const num = j.toString().padStart(2, '0');
        const imageUrl = `${environment.apiUrl}/Deployments/${subfolder}/${num}.jpg`;
        const textUrl = `${environment.apiUrl}/Deployments/${subfolder}/${num}.txt`;

        const text = await this.fetchTextContent(textUrl);
        this.imageUrls.push(imageUrl);
        this.titles[imageUrl] = text;
      }
    }
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
