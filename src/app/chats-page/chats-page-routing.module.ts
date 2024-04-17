import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsPagePage } from './chats-page.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsPagePageRoutingModule {}
