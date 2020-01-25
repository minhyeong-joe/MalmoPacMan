import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ProgressComponent } from './progress/progress.component';
import { FinalComponent } from './final/final.component';


const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'final', component: FinalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
