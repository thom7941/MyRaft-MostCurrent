import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupFiltersPageRoutingModule } from './group-filters-routing.module';

import { GroupFiltersPage } from './group-filters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupFiltersPageRoutingModule
  ],
  declarations: [GroupFiltersPage]
})
export class GroupFiltersPageModule {}
