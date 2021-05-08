import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/services/data-storage.service';
import { Playlist } from '../shared/models/playlist.model';
import { Tag } from '../shared/models/tag.model';

@Component({
	selector: 'app-view-playlist',
	templateUrl: './view-playlist.component.html',
	styleUrls: ['./view-playlist.component.css']
})
export class ViewPlaylistComponent implements OnInit {
	openPlaylistSubscription: Subscription;
	playlists: Playlist[];
	playlist: Playlist;
	tags: Tag[];

	constructor(private storageService: DataStorageService,
				private route: ActivatedRoute) { 
	}

	ngOnInit(): void {
		// this.playlistService.updatePlaylist;
		this.storageService.fetchPlaylists().subscribe(
			responseData => {
				this.playlists = responseData;
			}
		);
		this.route.data.subscribe(
			(data: Data) => {
				this.playlist = data['playlist'];
				this.tags = this.playlist.tags;
			}
		);
	}

	onEdit(){}
}
