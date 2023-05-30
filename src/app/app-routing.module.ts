import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiographieComponent } from '@components/biographie/biographie.component';
import { MetahismeComponent } from '@components/metahisme/metahisme.component';
import { OeuvreComponent } from '@components/oeuvre/oeuvre.component';
import { NewsComponent } from '@components/news/news.component';
import { ContactComponent } from '@components/contact/contact.component';
import { HomepageComponent } from "@components/homepage/homepage.component";
import { ArchetypesComponent } from '@components/archetypes/archetypes.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'biographie', component: BiographieComponent },
  { path: 'metahisme', component: MetahismeComponent },
  { path: 'oeuvre', component: OeuvreComponent },
  { path:  'archetypes', component: ArchetypesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
