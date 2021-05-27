import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PlaylistService } from '../playlist.service';
import { DataStorageService } from '../data-storage.service';
import { Playlist } from '../../models/playlist.model';


@Injectable({
  providedIn: 'root'
})
export class PlaylistResolver implements Resolve<Playlist>{
  
  constructor(private playlistService: PlaylistService,
              private storageService: DataStorageService) { }
              id: string;
  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot) {

     this.id = route.params.id;
    // console.log(this.playlistService.currentPlaylist)
    console.log(this.storageService.fetchPlaylist(this.id));
    return this.storageService.fetchPlaylist(this.id);
    // return this.playlistService.openPlaylist;
  }

}
