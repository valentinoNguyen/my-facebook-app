import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemDetailContainerComponent } from './components/item-detail-container/item-detail-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardContainerComponent,
    ItemDetailContainerComponent,
    ItemCardComponent
  ]
})
export class DashboardModule { }
