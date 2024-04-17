import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsPagePageRoutingModule } from './chats-page-routing.module';

import { ChatsPagePage } from './chats-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPagePageRoutingModule
  ],
  declarations: [ChatsPagePage]
})
export class ChatsPagePageModule {}
