import { Component, OnInit } from '@angular/core';
import { Channels } from '../channels';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from '../channels.service';

@Component({
  selector: 'app-channel-update',
  templateUrl: './channel-update.component.html',
  styleUrls: ['./channel-update.component.css']
})
export class ChannelUpdateComponent implements OnInit{

  id!: number;
  channels: Channels = new Channels();
  
  constructor(private channelService: ChannelsService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.channelService.getChannelById(this.id).subscribe(data => {
      this.channels = data;
    },
      error => {
      });
  }

  onSubmit(){
    this.channelService.updateChannel(this.id, this.channels).subscribe( data =>{
      this.goToChannelList();
    }
    , error => console.log(error));
  }

  goToChannelList(){
    this.router.navigate(['/channels']);
  }
}
