import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/services/data-storage.service';
import { Playlist } from '../shared/models/playlist.model';
import { Tag } from '../shared/models/tag.model';
import { PlaylistService } from '../shared/services/playlist.service';
// import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-view-playlist',
	templateUrl: './view-playlist.component.html',
	styleUrls: ['./view-playlist.component.css']
})
export class ViewPlaylistComponent implements OnInit, OnDestroy {
	plChangedSub: Subscription;
	editModeSub: Subscription;
	playlists: Playlist[];
	playlist: Playlist;
	tags: Tag[];
	editMode: boolean;

	constructor(private storageService: DataStorageService,
				private playlistService: PlaylistService,
				private router: Router,
				private route: ActivatedRoute) { 
	}

	ngOnInit(): void {

		this.editModeSub = this.playlistService.editMode.subscribe(
			data => {
				this.editMode = data;
			}
		);
		this.storageService.fetchPlaylists().subscribe(
			responseData => {
				this.playlists = responseData;
			}
		);
		this.route.data.subscribe(
			(data: Data) => {
				this.playlist = data['playlist'];
				this.tags = this.playlist.tags;
				console.log(data);
			}
		);
		if(!this.playlist){
			this.router.navigate(['view-gallery'])
		}
	}

	onEdit() {
		this.editMode = true;
		this.playlistService.editMode.next(true);
		// this.router.navigate(['edit'], {relativeTo: this.route});
	}

	onDelete() {
		const playlistId: string = this.playlist.id;
		this.storageService.deletePlaylist(playlistId).subscribe();
		this.router.navigate(['../../view-gallery'], {relativeTo: this.route});
		this.playlistService.playlistsChanged;
	}

	ngOnDestroy() {
		this.editModeSub.unsubscribe();
	}
}
