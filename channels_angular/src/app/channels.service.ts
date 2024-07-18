import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Channels } from './channels';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService implements OnInit {

  private baseURL = "http://localhost:8080/api/v1/channels";
  
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void { }

  getChannelList(): Observable<Channels[]>{
    return this.httpClient.get<Channels[]>(`${this.baseURL}`);
  }

  addChannel(Channels: Channels): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, Channels);
  }

  getChannelById(id: number): Observable<Channels>{
    return this.httpClient.get<Channels>(`${this.baseURL}/${id}`);
  }

  updateChannel(id: number, channels: Channels): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, channels);
  }

  deleteChannel(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
