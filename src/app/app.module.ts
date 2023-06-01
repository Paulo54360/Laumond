import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';
import { BiographieComponent } from 'src/app/pages/biographie/biographie.component';
import { MetahismeComponent } from 'src/app/pages/metahisme/metahisme.component';
import { OeuvreComponent } from 'src/app/pages/oeuvre/oeuvre.component';
import { NewsComponent } from 'src/app/pages/news/news.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { ArchetypesComponent } from './components/archetypes/archetypes.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeploymentsComponent } from './components/deployments/deployments.component';
import { DrawingsComponent } from './components/drawings/drawings.component';

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
    ArchetypesComponent,
    DeploymentsComponent,
    DrawingsComponent
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

