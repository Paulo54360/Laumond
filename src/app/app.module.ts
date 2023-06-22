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

import { ArchetypesComponent } from './pages/oeuvre/archetypes/archetypes.component';

import { DeploymentsComponent } from './pages/oeuvre/deployments/deployments.component';
import { DrawingsComponent } from './pages/oeuvre/drawings/drawings.component';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { FooterComponent } from './components/footer/footer.component';
import { TranscriptionsComponent } from './pages/oeuvre/transcriptions/transcriptions.component';
import { AnalysesComponent } from './pages/analyses/analyses.component';
import { ButtonUpPageComponent } from './components/button-up-page/button-up-page.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    TranscriptionsComponent,
    AnalysesComponent,
    ButtonUpPageComponent
  ],
  imports: [
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    ButtonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
    MatPaginatorModule,
    TabViewModule,
    MenubarModule,
    SidebarModule,

    RippleModule,
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
