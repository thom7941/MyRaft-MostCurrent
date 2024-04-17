import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadChildren: () => import('./events-page/events-page.module').then( m => m.EventsPagePageModule)
  },
  {
    path: 'resources',
    loadChildren: () => import('./resources-page/resources-page.module').then( m => m.ResourcesPagePageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./groups-page/groups-page.module').then( m => m.GroupsPagePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats-page/chats-page.module').then( m => m.ChatsPagePageModule)
  },
  {
    path: 'create-group/:id',
    loadChildren: () => import('./create-group/create-group.module').then( m => m.CreateGroupPageModule)
  },
  {
    path: 'groups-admin',
    loadChildren: () => import('./groups-admin/groups-admin.module').then( m => m.GroupsAdminPageModule)
  },
  {
    path: 'new-chat',
    loadChildren: () => import('./new-chat/new-chat.module').then( m => m.NewChatPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
