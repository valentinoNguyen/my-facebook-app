import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { ItemDetailContainerComponent } from './components/item-detail-container/item-detail-container.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent
  },
  {
    path: ':id',
    component: ItemDetailContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
