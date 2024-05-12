import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsPagePageRoutingModule } from './group-overview-routing.module';

import { GroupOverviewPage } from './group-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsPagePageRoutingModule
  ],
  declarations: [GroupOverviewPage]
})
export class GroupOverviewPageModule {}