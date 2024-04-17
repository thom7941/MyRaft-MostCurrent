import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupsPagePageRoutingModule } from './group-events-routing.module';

import { GroupEventsPage } from './group-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsPagePageRoutingModule
  ],
  declarations: [GroupEventsPage]
})
export class GroupEventsPageModule {}
