import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Playlist } from './playlist.model';
import { PlaylistItem } from './playlist-item.model';
import { QuoteItem, SongItem, ImageItem, VideoItem} from './playlist-item.model';


@Injectable({providedIn: 'root'})
export class PlaylistService {
	playlistPostUrl: string;

	constructor(public http: HttpClient){}

	public playlists: Playlist[] = [
		new Playlist('Test Playlist', 1, 'test description', [
			new QuoteItem(1, 'test quote', 'courier'),
			new SongItem(2,'https://open.spotify.com/track/1RaJMyCatBXw5hGCpVzTp4?si=U2K8Elr-SLGQBdCEUAorAg'),
			new ImageItem(3, 'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg'),
			new VideoItem(4,'https://youtu.be/WDlZ_SXx5gA')
		]),
	]
   
	createPlaylist() {
		const newPlaylist = new Playlist('title', null, 'description', [null, null, null, null]);
		this.playlists.push(newPlaylist);
		console.log(this.playlists);
	}

	addItemToPlaylist() {
		const media: [] = [];
		// media.push(item)

		//add media to playlist. Add to an array based on index
	}

	submitPlaylist() {
		//save playlist[post to backend], add to playlistgallery, (save as draft option?),
	}

	postPlaylist() {}

	getPlaylist() {}

	onCreatePlaylist(postData: Playlist) {
		//send Http request
		this.http.post('this.playlistPostUrl', postData
		).subscribe(responseData => {
			console.log(responseData)
		})
		
		console.log(postData);
	}
}






   


