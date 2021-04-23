import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Playlist } from './playlist.model';
import { QuoteItem, SongItem, ImageItem, VideoItem, PlaylistItem} from './playlist-item.model';


@Injectable({providedIn: 'root'})
export class PlaylistService {
	playlistPostUrl: string;
	currentPlaylist: Playlist;
	coreItem: PlaylistItem;
	public playlistCreated = new Subject<Playlist>();
	public coreAdded = new Subject<PlaylistItem>();

	constructor(public http: HttpClient) {}

	public playlists: Playlist[] = [
		new Playlist('Test Playlist', 1, [],'test description', [
			new QuoteItem(1, 'test quote', 'courier'),
			new SongItem(2,'https://open.spotify.com/track/1RaJMyCatBXw5hGCpVzTp4?si=U2K8Elr-SLGQBdCEUAorAg'),
			new ImageItem(3, 'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg'),
			new VideoItem(4,'https://youtu.be/WDlZ_SXx5gA')
		]),
	]
   
	createPlaylist() {
		const newPlaylist = new Playlist('title', null, [], 'description', [null, null, null, null]);
		this.playlists.push(newPlaylist);

		this.currentPlaylist = newPlaylist;
		this.playlistCreated.next(this.currentPlaylist);
		console.log(this.currentPlaylist);
	}

	addCoreToPlaylist(item: PlaylistItem) {
		this.currentPlaylist.playlistItems.push(item);
	}

	addItemToPlaylist() {
		
		// const media: [] = [];
		// media.push(item)

		//add media to playlist. Add to an array based on index
	}

	submitPlaylist() {
		//, add to playlistgallery, (save as draft option?),
		//postPlaylist() {}
	}

	postPlaylist() {
		//save playlist[post to backend]
	}

	getPlaylists() {
		
	}

	getPlaylist() {
		if (this.currentPlaylist !== null) {
			return this.currentPlaylist;
		}
		
	}

	// onCreatePlaylist(postData: Playlist) {
		//send Http request
		//post to backend
		//get playlist id
		// this.http.post('this.playlistPostUrl', postData
		// ).subscribe(responseData => {
		// 	console.log(responseData)
		// })
		
		// console.log(postData);
	// }
}






   


