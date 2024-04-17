import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesPagePage } from './resources-page.page';

const routes: Routes = [
  {
    path: '',
    component: ResourcesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesPagePageRoutingModule {}
