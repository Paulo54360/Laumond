import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';
import { BiographieComponent } from 'src/app/pages/biographie/biographie.component';
import { MetahismeComponent } from 'src/app/pages/metahisme/metahisme.component';
import { OeuvreComponent } from 'src/app/pages/oeuvre/oeuvre.component';
import { NewsComponent } from 'src/app/pages/news/news.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { ArchetypesComponent } from './components/archetypes/archetypes.component';

import { DeploymentsComponent } from './components/deployments/deployments.component';
import { DrawingsComponent } from './components/drawings/drawings.component';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './components/footer/footer.component';


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
    DrawingsComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MenubarModule,
    SidebarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

