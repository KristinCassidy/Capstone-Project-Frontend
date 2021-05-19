import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlaylistService } from '../shared/services/playlist.service';
import { DataStorageService } from '../shared/services/data-storage.service';
import { Playlist } from '../shared/models/playlist.model';
import { PlaylistItem } from '../shared/models/playlist-item.model';

@Component({
	selector: 'app-view-gallery',
	templateUrl: './view-gallery.component.html',
	styleUrls: ['./view-gallery.component.css']
})
export class ViewGalleryComponent implements OnInit {
	loadedPlaylists: Playlist[] = [];
	isFetching: boolean = false;
	playlistItems: PlaylistItem[];
	// playlistItem: PlaylistItem;
	coreUrl: string;
	item2Url: string;
	item3Url: string;
	item4Url: string;
	item5Url: string;

  	constructor(private playlistService: PlaylistService,
			  	private storageService: DataStorageService,
				private route: ActivatedRoute,
				private router: Router) { }

  	ngOnInit() {
		this.isFetching = true;
		this.storageService.fetchPlaylists()
	  		.subscribe( 
				playlists => {
		 			this.isFetching = false;
		  			this.loadedPlaylists = playlists;
					this.loadedPlaylists.map(
						(playlist: Playlist) =>
							this.coreUrl = playlist.playlistItems[0].imagePath,
							console.log(this.coreUrl)
					)
					 
			});
  	}

	onFetchPlaylists() {
		this.isFetching = true;
		this.storageService
			.fetchPlaylists()
			.subscribe( 
				playlists => {
					this.isFetching = false;
					this.loadedPlaylists = playlists;
			});
	}

 	onClearPlaylists() {
		this.storageService
			.deletePlaylists()
			.subscribe(() => {
	  			this.loadedPlaylists = [];
			})
  	}

  	onOpenPlaylist(index: number) {
		const selected = this.loadedPlaylists[index];
		// this.playlistService.openPlaylist.next(selected);
		this.playlistService.updatePlaylist(selected);
		// console.log(selected);
		this.router.navigate(['view-playlist', selected.id], {});
  	}
	
	//   onOpenPlaylist(index: number) {
	// 	const selected = this.loadedPlaylists[index];
	// 	// this.playlistService.openPlaylist.next(selected);
	// 	this.playlistService.updatePlaylist(selected);
	// 	// console.log(selected);
	// 	this.router.navigate(['view-playlist', selected.id], {});
  	// }
}
