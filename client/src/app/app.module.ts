import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';

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
    IvyCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

