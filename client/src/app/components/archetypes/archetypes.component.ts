import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, animateChild, group } from '@angular/animations';

interface Titles {
  [key: string]: string;
}

@Component({
  selector: 'app-archetypes',
  templateUrl: './archetypes.component.html',
  styleUrls: ['./archetypes.component.scss']
})
export class ArchetypesComponent {
  currentImageIndex: number | null = null;
  imageUrls: string[] = [];
  titles: string[] = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      const num = i.toString().padStart(2, '0');
      const url = `https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes+copie/02/${num}.jpg`;
      this.imageUrls.push(url);
      this.titles.push(this.getTitle(url));
    }
  }

  getTitle(imageUrl: string): string {
    const num = imageUrl.slice(-6, -4);
    const titles: Titles = {
      '01': "Jusqu'Au-Boutisme",
      '02': 'Le Dogme De La Dualité (Archétype)',
      '03': "L'Œuvre De Damoclès Et L'Energie Quantique De La Pensée (Archétype)",
      '04': "L'Œuvre De Damoclès Et L’Energie Quantique De La Pensée - Détail (Archétype)",
      '05': "L'Œuvre De Damoclès Et L’Energie Quantique De La Pensée - Détail (Archétype)",
      '06': "Mausolée Du MétaHisme (Archétype)",
      '07': "Mono-Pensée (Archétype)\n",
      '08': "L’Equilibre Du Présent (Archétype) - Collection Privée\n",
      '09': "Le Grand Mikado De La Pensée (Archétype)\n",
      '10': "Le Grand Mikado De La Pensée (Archétype)\n"
    };
    return titles[num] || '';
  }

  openModal(index: number) {
    this.currentImageIndex = index;
  }

  closeModal() {
    this.currentImageIndex = null;
  }

}
