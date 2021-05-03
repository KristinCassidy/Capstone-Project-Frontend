import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlaylistService } from '../shared/services/playlist.service';
import { Playlist } from '../shared/models/playlist.model';
import { Tag } from '../shared/models/tag.model';
import { PlaylistItem } from '../shared/models/playlist-item.model';
import { CreatePlaylistService } from '../shared/services/create-playlist.service';

@Component({
  	selector: 'app-create-playlist',
  	templateUrl: './create-playlist.component.html',
  	styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  	private currentPlaylist: Playlist;
  	// mode: string;
  	private playlistStarted: Subscription;
	private coreAddedSub: Subscription;

  	title: string;
	tags: Tag[];
	description: string;

	//mode=dataForm
	//    show only "1. Enter title..."
	//mode=addCore
	//    show 1. 2.
	//    display playlist data through string interpolation
	//mode=addMedia
	//    show 1. 2. 3.
	//    display playlist data through string interpolation

  	constructor(private playlistService: PlaylistService) { }

	ngOnInit(): void {
		// this.mode = 'dataForm';
		// this.currentPlaylist = this.playlistService.getPlaylist();
			this.playlistStarted = this.playlistService.playlistCreated
				.subscribe(
					(playlist: Playlist) => {
						this.currentPlaylist = playlist;
						this.title = this.currentPlaylist.title;
						this.tags = this.currentPlaylist.tags;
						this.description = this.currentPlaylist.description;
						console.log(this.currentPlaylist);
					}
				);
			this.coreAddedSub = this.playlistService.coreAdded
				.subscribe(
					(item: PlaylistItem) => {
						this.currentPlaylist.playlistItems.push(item);
						console.log(this.currentPlaylist);
					}
				)
	};

	ngOnDestroy(): void {
		this.playlistStarted.unsubscribe();
		this.coreAddedSub.unsubscribe();
	};

}
