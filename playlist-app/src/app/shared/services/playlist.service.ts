import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Playlist } from '../models/playlist.model';
import { PlaylistItem } from "../models/playlist-item.model";

@Injectable({providedIn: 'root'})
export class PlaylistService {
	playlistCreated = new Subject<Playlist>();
	openPlaylist = new Subject<Playlist>();
	playlistsChanged = new Subject<Playlist[]>();
	coreAdded = new Subject<PlaylistItem>();
	editMode = new Subject<boolean>();

	constructor() { }
		private playlistsArray: Playlist[] = [];
		private playlist: Playlist;
		currentPlaylist: Playlist;

	setPlaylists(playlists: Playlist[]) {
		this.playlistsArray = playlists;
		this.playlistsChanged.next(this.playlistsArray.slice());
	}

	updatePlaylist(index: number, newPlaylist: Playlist) {
		//edits selected/ current playlist
		// const playlists = this.storageService.fetchPlaylists();
		// this.currentPlaylist = playlists[index];
		this.currentPlaylist = newPlaylist;
		console.log(this.currentPlaylist);
		this.openPlaylist.next(this.currentPlaylist);
		this.editMode.next(false);
		return(this.currentPlaylist);
	}

	addCoreToPlaylist(item: PlaylistItem) {
		this.currentPlaylist.playlistItems.push(item);
	}

	addItemToArray(item: PlaylistItem) {
		const playlistItems: PlaylistItem[] = [];
		playlistItems.push(...playlistItems, item);
		console.log(playlistItems.slice())
		return playlistItems.slice();

	}
}






   


