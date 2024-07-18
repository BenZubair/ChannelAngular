import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelUpdateComponent } from './channel-update/channel-update.component';

const routes: Routes = [

  {
    path: '',
    component: AddChannelComponent
  },

  {
    path: 'channel-list',
    component: ChannelListComponent
  },

  {
    path: 'channel-update',
    component: ChannelUpdateComponent
  },

  {
    path: 'channel-details',
    component: ChannelUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
