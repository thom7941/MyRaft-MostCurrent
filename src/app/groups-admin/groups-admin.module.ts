import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsAdminPageRoutingModule } from './groups-admin-routing.module';

import { GroupsAdminPage } from './groups-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsAdminPageRoutingModule
  ],
  declarations: [GroupsAdminPage]
})
export class GroupsAdminPageModule {}
