import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { HomepageComponent } from '@components/homepage/homepage.component';
import { BiographieComponent } from '@components/biographie/biographie.component';
import { MetahismeComponent } from '@components/metahisme/metahisme.component';
import { OeuvreComponent } from '@components/oeuvre/oeuvre.component';
import { NewsComponent } from '@components/news/news.component';
import { ContactComponent } from '@components/contact/contact.component';
import { ArchetypesComponent } from './components/archetypes/archetypes.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BiographieComponent,
    MetahismeComponent,
    OeuvreComponent,
    NewsComponent,
    ContactComponent,
    ArchetypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    CarouselModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

