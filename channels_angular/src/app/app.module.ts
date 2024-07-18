import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { ChannelUpdateComponent } from './channel-update/channel-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddChannelComponent,
    ChannelListComponent,
    ChannelDetailsComponent,
    ChannelUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
