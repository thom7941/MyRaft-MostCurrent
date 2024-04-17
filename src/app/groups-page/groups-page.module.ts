import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsPagePageRoutingModule } from './groups-page-routing.module';

import { GroupsPagePage } from './groups-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsPagePageRoutingModule
  ],
  declarations: [GroupsPagePage]
})
export class GroupsPagePageModule {}
