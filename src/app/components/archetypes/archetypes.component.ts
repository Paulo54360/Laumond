import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Titles {
  [key: string]: string;
}

@Component({
  selector: 'app-archetypes',
  templateUrl: './archetypes.component.html',
  styleUrls: ['./archetypes.component.scss']
})
export class ArchetypesComponent implements OnInit {
  currentImageIndex: number | null = null;
  imageUrls: string[] = [];
  titles: Titles = {};

  constructor() { }

  ngOnInit() {
    this.loadArchetypes();
  }

  async loadArchetypes() {
    const subfolders = ['02', '03', '04', '05', '06', '07', '08'];
    const fileRanges = [[1, 10], [1, 9], [1, 7], [1, 7], [1, 8], [1, 8], [1, 4]]; // Plage de boucle pour chaque sous-dossier

    for (let i = 0; i < subfolders.length; i++) {
      const subfolder = subfolders[i];
      const range = fileRanges[i];

      for (let j = range[0]; j <= range[1]; j++) {
        const num = j.toString().padStart(2, '0');
        const imageUrl = `${environment.apiUrl}/Archetypes/${subfolder}/${num}.jpg`;        
        const textUrl = `${environment.apiUrl}/Archetypes/${subfolder}/${num}.txt`;

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
      console.log(`Contenu du fichier ${this.imageUrls} récupéré`);
  }

  closeModal() {
    this.currentImageIndex = null;
  }
}
