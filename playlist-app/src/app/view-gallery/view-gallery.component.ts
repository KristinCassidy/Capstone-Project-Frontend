import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

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
	fetchedPlaylists: Playlist[];
	loadedPlaylists: Playlist[] = [];
	isFetching: boolean = false;
	playlistItems: PlaylistItem[];
	playlistIndex: number;
	images;
	// playlistItem: PlaylistItem;
	coreUrl;
	item2Url;
	item3Url: string;
	item4Url: string;
	item5Url: string;

	edit: boolean = false;

  	constructor(private playlistService: PlaylistService,
			  	private storageService: DataStorageService,
				private route: ActivatedRoute,
				private router: Router) { }

  	ngOnInit() {
		this.isFetching = true;
		this.route.data.subscribe(
			(data: Data) => {
				this.fetchedPlaylists = data['playlists'];
				console.log(this.fetchedPlaylists)
				this.fetchedPlaylists.forEach(
					playlist => {
						
						if(!playlist.playlistItems){
							playlist.playlistItems = [];
						}
						this.loadedPlaylists.push(playlist)
					
					}
				)
				this.isFetching = false;
				console.log(this.loadedPlaylists);
			}
		);
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
		// this.playlistIndex = index;
		// this.playlistService.playlistIndex.next(index);
		const selected = this.loadedPlaylists[index];
		this.playlistService.openPlaylist.next(selected);
		// this.playlistService.updatePlaylist(selected);
		console.log(selected);
		this.router.navigate(['view-playlist', selected.id], {});
  	}
	


	  onEdit() {
		  this.edit = !this.edit;
	  }
}
