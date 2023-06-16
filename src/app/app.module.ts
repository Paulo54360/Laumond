import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmplifyAuthenticatorModule } from "@aws-amplify/ui-angular";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';
import { BiographieComponent } from 'src/app/pages/biographie/biographie.component';
import { MetahismeComponent } from 'src/app/pages/metahisme/metahisme.component';
import { OeuvreComponent } from 'src/app/pages/oeuvre/oeuvre.component';
import { NewsComponent } from 'src/app/pages/news/news.component';

import { ArchetypesComponent } from './components/archetypes/archetypes.component';

import { DeploymentsComponent } from './components/deployments/deployments.component';
import { DrawingsComponent } from './components/drawings/drawings.component';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './components/footer/footer.component';
import { TranscriptionsComponent } from './components/transcriptions/transcriptions.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BiographieComponent,
    MetahismeComponent,
    OeuvreComponent,
    NewsComponent,
    ArchetypesComponent,
    DeploymentsComponent,
    DrawingsComponent,
    FooterComponent,
    TranscriptionsComponent
  ],
  imports: [
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MenubarModule,
    SidebarModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}