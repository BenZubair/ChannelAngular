import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channels } from '../channels';
import { ChannelsService } from '../channels.service';

@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrls: ['./channel-details.component.css']
})
export class ChannelDetailsComponent implements OnInit {


  id!: number;
  channels!: Channels;
  constructor(private route: ActivatedRoute, private channelService: ChannelsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.channels = new Channels();
    this.channelService.getChannelById(this.id).subscribe( data => {
      this.channels = data;
    });
  }
}

