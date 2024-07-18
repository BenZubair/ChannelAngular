import { Component, OnInit } from '@angular/core';
import { ChannelsService } from '../channels.service';
import { Router } from '@angular/router';
import { Channels } from '../channels';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  channel!: Channels[];

  constructor(private channelService: ChannelsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getChannel();
  }

  private getChannel(){
    this.channelService.getChannelList().subscribe(data => {
      this.channel = data;
    });
  }

  channelDetails(id: number){
    this.router.navigate(['channeldetails', id]);
  }

  channelUpdate(id: number){
    this.router.navigate(['channelupdate', id]);
  }

  deleteChannel(id: number){
    this.channelService.deleteChannel(id).subscribe( data => {
      console.log(data);
      this.getChannel();
      alert("Channel Deleted Successful!")
    },
    error => {
      alert("Fail to Delete Channel!")
    });
  }

}
