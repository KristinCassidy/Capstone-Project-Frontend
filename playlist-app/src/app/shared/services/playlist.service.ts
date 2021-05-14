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
	mediaAdded = new Subject<Playlist>();

	constructor() { }
		private playlistsArray: Playlist[] = [];
		// private playlist: Playlist;
		currentPlaylist: Playlist;

	setPlaylists(playlists: Playlist[]) {
		this.playlistsArray = playlists;
		this.playlistsChanged.next(this.playlistsArray.slice());
	}

	updatePlaylist(newPlaylist: Playlist) {
		//edits selected/ current playlist
		// const playlists = this.storageService.fetchPlaylists();
		// this.currentPlaylist = playlists[index];
		this.currentPlaylist = newPlaylist;
		console.log(this.currentPlaylist);
		this.openPlaylist.next(this.currentPlaylist);
		this.editMode.next(false);
		return(this.currentPlaylist);
	}

//PLAYLIST ITEMS------------------------------------------------------------------------------------

	addItem(item: PlaylistItem) {
		this.currentPlaylist.playlistItems.push(item);
		console.log(this.currentPlaylist);
		this.mediaAdded.next(this.currentPlaylist);
	}

	setPlEditForm(playlist: Playlist) {
		// this.currentPlaylist = playlist;
		// this.tagChanged.next(this.playlistTags.slice());
	}
	// addItemToArray(item: PlaylistItem) {
		// 	const playlistItems: PlaylistItem[] = [];
		// 	playlistItems.push(...playlistItems, item);
		// 	console.log(playlistItems.slice())
		// 	return playlistItems.slice();
	// }


}






   


