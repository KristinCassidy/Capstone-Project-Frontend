import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { DataStorageService } from "./data-storage.service";
import { Playlist } from '../models/playlist.model';
import { PlaylistItem } from "../models/playlist-item.model";

@Injectable({providedIn: 'root'})
export class PlaylistService {
	playlistCreated = new Subject<Playlist>();
	openPlaylist = new Subject<Playlist>();
	playlistsChanged = new Subject<Playlist[]>();

	coreAdded = new Subject<PlaylistItem>();

	constructor() { }
	// private storageService: DataStorageService
	private playlistsArray: Playlist[] = [];
	private playlist: Playlist;
	currentPlaylist: Playlist;
	// playlists: Playlist[] = this.storageService.fetchPlaylists();

	setPlaylists(playlists: Playlist[]) {
		this.playlistsArray = playlists;
		this.playlistsChanged.next(this.playlistsArray.slice());
	}

	getPlaylist(id: string) {

	}

	updatePlaylist(index: number, newPlaylist: Playlist) {
		//edits selected/ current playlist
		// const playlists = this.storageService.fetchPlaylists();
		// this.currentPlaylist = playlists[index];
		this.currentPlaylist = newPlaylist;
		console.log(this.currentPlaylist);
		this.openPlaylist.next(this.currentPlaylist);
		return(this.currentPlaylist);
	}

	addCoreToPlaylist(item: PlaylistItem) {
		this.currentPlaylist.playlistItems.push(item);
	}

	

}






   


