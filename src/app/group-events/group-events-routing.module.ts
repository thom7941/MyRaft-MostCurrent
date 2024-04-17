import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupEventsPage } from './group-events.page';

const routes: Routes = [
  {
    path: '',
    component: GroupEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsPagePageRoutingModule {}
