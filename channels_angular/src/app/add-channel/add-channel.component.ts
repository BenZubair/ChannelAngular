import { Component, OnInit } from '@angular/core';
import { Channels } from '../channels';
import { ChannelsService } from '../channels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.css']
})
export class AddChannelComponent implements OnInit {

  channels: Channels = new Channels();
  constructor(private channelService: ChannelsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChannel(){
    this.channelService.addChannel(this.channels).subscribe( data =>{
      console.log(data);
      this.goToChannelList();

      alert("Channel Successful Added!")
    },
      error => {
        alert("Fail to Add Channel!")
      });
  }

  goToChannelList(){
    this.router.navigate(['/channels']);
  }

  onSubmit(){
    console.log(this.channels);
    this.saveChannel();
  }

}
