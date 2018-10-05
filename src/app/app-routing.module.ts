import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumitureComponent } from './humiture/humiture.component'
import { HistoryComponent } from './history/history.component'

const routes: Routes = [
  { path: '', redirectTo: '/history', pathMatch: 'full' },
  { path: 'history', component: HistoryComponent },
  { path: 'humiture', component: HumitureComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
