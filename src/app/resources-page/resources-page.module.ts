import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourcesPagePageRoutingModule } from './resources-page-routing.module';

import { ResourcesPagePage } from './resources-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourcesPagePageRoutingModule
  ],
  declarations: [ResourcesPagePage]
})
export class ResourcesPagePageModule {}
