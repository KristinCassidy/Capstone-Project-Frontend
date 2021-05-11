import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PlaylistService } from './playlist.service';
import { DataStorageService } from './data-storage.service';
import { Playlist } from '../models/playlist.model';


@Injectable({
  providedIn: 'root'
})
export class PlaylistResolver implements Resolve<Playlist>{

  constructor(private playlistService: PlaylistService,
              private storageService: DataStorageService) { }

  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot) {

    console.log(this.playlistService.currentPlaylist)
    return this.playlistService.currentPlaylist;
  }
}
