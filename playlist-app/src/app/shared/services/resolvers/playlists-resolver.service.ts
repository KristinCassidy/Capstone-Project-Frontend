import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Playlist } from '../../models/playlist.model';
import { DataStorageService } from '../data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsResolver implements Resolve<Playlist[]>{

  constructor( private storageService: DataStorageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.storageService.fetchPlaylists();
  }
}