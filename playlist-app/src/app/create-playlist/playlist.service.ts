import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import {  map } from 'rxjs/operators';

import { Playlist } from '../shared/playlist.model';
import { QuoteItem, SongItem, ImageItem, VideoItem, PlaylistItem} from '../shared/playlist-item.model';


@Injectable({providedIn: 'root'})
export class PlaylistService {
	playlistPostUrl: string = 'https://playlist-app-fd53b-default-rtdb.firebaseio.com/playlists.json'
	currentPlaylist: Playlist;
	loadedPlaylists: Playlist[] = [];

	playlistCreated = new Subject<Playlist>();
	openPlaylist = new Subject<number>();

	constructor(public http: HttpClient) {}

	public playlists: Playlist[] = [
		// new Playlist('Test Playlist', '', [],'test description', [
		// 	new QuoteItem(1, 'test quote', 'courier'),
		// 	new SongItem(2,'https://open.spotify.com/track/1RaJMyCatBXw5hGCpVzTp4?si=U2K8Elr-SLGQBdCEUAorAg'),
		// 	new ImageItem(3, 'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg'),
		// 	new VideoItem(4,'https://youtu.be/WDlZ_SXx5gA')
		// ]),
	]
   
	createPlaylist() {
		const newPlaylist = new Playlist('title', null, [], 'description', [null, null, null, null]);
		// this.playlists.push(newPlaylist);
		this.currentPlaylist = newPlaylist;
		this.playlistCreated.next(this.currentPlaylist);
		this.postPlaylist(this.currentPlaylist)
	}

	postPlaylist(postData: Playlist) {
		//saves playlist to backend [post to backend]	
		this.http.post<{ name: string }>(this.playlistPostUrl, 
			postData
			)
			.subscribe(responseData => {
				console.log(responseData);
		});
	}

	deletePlaylists() {
		//deletes all playlists
		return this.http.delete(this.playlistPostUrl);
	}

	fetchPlaylists() {
		//fetches all playlists from backend
		return this.http
			.get<{ [key: string]: Playlist }>(this.playlistPostUrl)
			.pipe(
				map(responseData => {
					const playlistsArray: Playlist[] = [];
					for (const key in responseData) {
						if (responseData.hasOwnProperty(key)) {
							playlistsArray.push({...responseData[key], id: key });
						}
					}
					return playlistsArray;
				})
			);
	}

	getPlaylist() {
		if (this.currentPlaylist !== null) {
			return this.currentPlaylist;
		}
		
	}

}






   


