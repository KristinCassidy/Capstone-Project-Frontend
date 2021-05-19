import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PlaylistItem } from '../models/playlist-item.model';

import { Playlist } from '../models/playlist.model';
import { Tag } from '../models/tag.model';
import { PlaylistService } from './playlist.service';
import { TagService } from './tag.service';


@Injectable({
  	providedIn: 'root'
})
export class DataStorageService {
  	tagsUrl: string = 'https://playlist-app-fd53b-default-rtdb.firebaseio.com/tags.json';
  	playlistUrl: string = 'https://playlist-app-fd53b-default-rtdb.firebaseio.com/playlists.json';
	updateTagsSub: Subscription;
	loadedTags: Tag[];
	tagId: string;

  	constructor(private http: HttpClient,
				private playlistService: PlaylistService,
				private tagService: TagService) { }

// TAGS-------------------------------------------------------------------------------------------------------- 

	putTags(tags: Tag[]) {
		this.http.put(this.tagsUrl, tags).subscribe();
	}

  	fetchTags() {
		return this.http
	  		.get<{ [key:string]: Tag }>(this.tagsUrl)
			.pipe(
				map(responseData => {
					const tagsArray: Tag[] = [];
					for (const key in responseData) {
						if (responseData.hasOwnProperty(key)) {
							tagsArray.push({ ...responseData[key], id: key });
						}	
					}
					return tagsArray
					.map(tag => {
						return { ...tag, id: tag.id ? tag.id : ''
						}
					});
				})
				,
				tap(tags => {
					this.tagService.setTags(tags);
				})
			);
  	};

	deleteTags() {
		return this.http.delete(this.tagsUrl);
	};

// TAG--------------------------------------------------------------------------------------------------------

	createAndStoreTag(tagData: Tag) {
		this.http.post(this.tagsUrl, tagData).subscribe();	
	};

	deleteTag(tag: Tag) {
		const tagUrl = `https://playlist-app-fd53b-default-rtdb.firebaseio.com/tags/${ tag.id }.json`;
		return this.http.delete(tagUrl).subscribe();
	}



// PLAYLISTS---------------------------------------------------------------------------------------------------

	
	postPlaylist(postData: Playlist) {  //saves playlist to backend [post to backend]
		this.http
			.post<{ name: string }>(this.playlistUrl, postData)
			.subscribe(responseData => {
				console.log(responseData);
			});
	};


	deletePlaylists() { //deletes all playlists
		return this.http.delete(this.playlistUrl);
	};


	fetchPlaylists() { //fetches all playlists from backend
		return this.http
			.get<{ [key: string]: Playlist }>(this.playlistUrl)
			.pipe(
				map(responseData => {
					const playlistsArray: Playlist[] = [];
					for (const key in responseData) {
						if (responseData.hasOwnProperty(key)) {
							playlistsArray.push({...responseData[key], id: key });
						}
					}
					// console.log(playlistsArray)
					return playlistsArray.map(playlist => {
						return {...playlist, playlistItems: playlist.playlistItems ? playlist.playlistItems: []}
					})
				}),
				tap(playlists => {
					this.playlistService.setPlaylists(playlists);
				})
			)
	};


// PLAYLIST----------------------------------------------------------------------------------------------------

	fetchPlaylist( idKey: string ) {
		const plUrl = `https://playlist-app-fd53b-default-rtdb.firebaseio.com/playlists/${ idKey }.json`;
		return this.http.get<{ [key: string]: Playlist }>(plUrl);
	}

	deletePlaylist(idKey: string ) {
		const plUrl = `https://playlist-app-fd53b-default-rtdb.firebaseio.com/playlists/${ idKey }.json`;
		return this.http.delete(plUrl);
	}

	putPlaylist(idKey: string, updatedPlaylist: Playlist) {
		const plUrl = `https://playlist-app-fd53b-default-rtdb.firebaseio.com/playlists/${ idKey }.json`;
		return this.http.put(plUrl, updatedPlaylist).subscribe();
	}

// PLAYLIST ITEMS----------------------------------------------------------------------------------------------------

	fetchItems( idKey: string ) {
		const plUrl = `https://playlist-app-fd53b-default-rtdb.firebaseio.com/playlists/${ idKey }/playlistItems.json`;
		return this.http.get<{ [key: string]: PlaylistItem[] }>(plUrl);
	}

	fetchImages( idKey: string ) {
		const plUrl = `https://playlist-app-fd53b-default-rtdb.firebaseio.com/playlists/${ idKey }/playlistItems.json`;
		return this.http.get<{ [key: string]: PlaylistItem[] }>(plUrl)
			.pipe(
				map(responseData => {
					const items: PlaylistItem[] = [];

					for (const key in responseData) {
						// if(responseData.hasOwnProperty(key)) {
							// items.push(...responseData[key]);
					// 	}
						// console.log(items)
					// }
					// if (responseData !== null) {
						// console.log(responseData[0])
						return responseData
				// .map(tag => {
				// 	return { ...tag, id: tag.id ? tag.id : ''
				// 	}
				// });
					// }
				}
					
				}

				)
			)
	}






// fetcTags() {
// 	return this.http
// 		  .get<{ [key:string]: Tag }>(this.tagsUrl)
// 		.pipe(
// 			map(responseData => {
// 				const tagsArray: Tag[] = [];
// 				for (const key in responseData) {
// 					if (responseData.hasOwnProperty(key)) {
// 						tagsArray.push({ ...responseData[key], id: key });
// 					}	
// 				}
// 				return tagsArray
// 				.map(tag => {
// 					return { ...tag, id: tag.id ? tag.id : ''
// 					}
// 				});
// 			})
// 			,
// 			tap(tags => {
// 				this.tagService.setTags(tags);
// 			})
// 		);
//   };

}