import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-oeuvre',
  templateUrl: './oeuvre.component.html',
  styleUrls: ['./oeuvre.component.scss'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }],

})
export class OeuvreComponent {
  imagesArchetypes = [
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/01.jpg", title: "Slide 1" },
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/02.jpg", title: "Slide 2" },
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/03.jpg", title: "Slide 3" },
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/04.jpg", title: "Slide 4" },
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/05.jpg", title: "Slide 5" },
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/06.jpg", title: "Slide 6" },
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/07.jpg", title: "Slide 7" },
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/08.jpg", title: "Slide 8" },
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/09.jpg", title: "Slide 9" },
    { path: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/10.jpg", title: "Slide 10" },
  ];


}
