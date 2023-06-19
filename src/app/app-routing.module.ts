import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiographieComponent } from 'src/app/pages/biographie/biographie.component';
import { MetahismeComponent } from 'src/app/pages/metahisme/metahisme.component';
import { OeuvreComponent } from 'src/app/pages/oeuvre/oeuvre.component';
import { NewsComponent } from 'src/app/pages/news/news.component';

import { HomepageComponent } from "src/app/pages/homepage/homepage.component";
import { ArchetypesComponent } from '@components/archetypes/archetypes.component';
import { DeploymentsComponent } from '@components/deployments/deployments.component';
import { DrawingsComponent } from '@components/drawings/drawings.component';
import { TranscriptionsComponent } from '@components/transcriptions/transcriptions.component';
import { AnalysesComponent } from './pages/analyses/analyses.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'biographie', component: BiographieComponent },
  { path: 'metahisme', component: MetahismeComponent },
  { path: 'oeuvre', component: OeuvreComponent },
  { path: 'archetypes', component: ArchetypesComponent },
  { path: 'deployments', component: DeploymentsComponent },
  { path: 'drawings', component: DrawingsComponent },
  { path: 'transcriptions', component: TranscriptionsComponent },
  { path: 'analyses', component: AnalysesComponent },
  { path: 'news', component: NewsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
