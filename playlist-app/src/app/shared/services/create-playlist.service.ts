import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import {  map } from 'rxjs/operators';

import { Playlist } from '../models/playlist.model';
import { QuoteItem, SongItem, ImageItem, VideoItem, PlaylistItem} from '../models/playlist-item.model';
import { PlaylistService } from './playlist.service';

@Injectable({
  providedIn: 'root'
})
export class CreatePlaylistService {
  currentPlaylist: Playlist;
  // coreItem: PlaylistItem;
  coreAdded = new Subject<PlaylistItem>();
  playlistStarted = new Subject<Playlist>();

  constructor(private playlistService: PlaylistService,
              private http: HttpClient) { }

  createPlaylist() {
		const newPlaylist = new Playlist('title', null, [], 'description', [null, null, null, null]);
		this.currentPlaylist = newPlaylist;
		this.playlistService.playlistCreated.next(this.currentPlaylist);
	}

  addCoreToPlaylist(item: PlaylistItem) {
		this.currentPlaylist.playlistItems.push(item);
	}


}
