import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/services/data-storage.service';
import { Playlist } from '../shared/models/playlist.model';
import { Tag } from '../shared/models/tag.model';
import { PlaylistService } from '../shared/services/playlist.service';
import { PlaylistItem } from '../shared/models/playlist-item.model';
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
	playlistItems: PlaylistItem[] = [];
	tags: Tag[];
	id: string;
	editMode: boolean;
	isFetching: boolean = false;
	selected: boolean = false;
	showModal: boolean = false;
	imageUrl: string;

	constructor(private storageService: DataStorageService,
				private playlistService: PlaylistService,
				private router: Router,
				private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.isFetching = true;
		this.route.params.subscribe(
			(params: Params) => {
				this.id = params['id'];
				// this.storageService.fetchPlaylist(this.id).subscribe();
			}
		);
		this.storageService.fetchPlaylists().subscribe(
			responseData => {
				this.playlists = responseData;
				this.isFetching = false
			}
		);
		this.route.data.subscribe(
			(data: Data) => {
				this.playlist = data['playlist'];
				console.log(this.playlist);
				this.tags = this.playlist.tags;
				this.playlistItems = this.playlist.playlistItems;
				console.log(data);
			}
		);
		
		this.plChangedSub = this.playlistService.mediaAdded.subscribe(
			playlist => {
				this.playlist = playlist;
				this.playlistItems = this.playlist.playlistItems;
				// console.log(playlist)
				this.isFetching = false;
			}
		);
	
		this.editModeSub = this.playlistService.editMode.subscribe(
			data => {
				this.editMode = data;
			}
		);
	
		if(!this.playlist){
			this.router.navigate(['view-gallery'])
		}
	}

	onEdit() {
		this.editMode = true;
		this.playlistService.editMode.next(true);
		// this.playlistService.mediaAdded.next(this.playlist);
		// this.router.navigate(['edit'], {relativeTo: this.route});
	}

	onDelete() {
		const playlistId: string = this.playlist.id;
		this.storageService.deletePlaylist(playlistId).subscribe();
		this.router.navigate(['../../view-gallery'], {relativeTo: this.route});
		this.playlistService.playlistsChanged;
	}

	onCancel() {
		this.editMode = false;
	}

	onOpenImage(index: number) {
		this.selected = !this.selected;
		if (this.editMode) {
			console.log(this.playlist.id, index)
			// this.storageService.deleteItem(this.playlist.id, index).subscribe();
		} else {
			this.showModal = true;
			this.imageUrl = this.playlistItems[index].imagePath;
			this.playlistService.getImageUrl(this.imageUrl);
			console.log(this.imageUrl)
		}
		
		// this.router.navigate(['/'], {relativeTo: this.route})
		//open image in modal
	}

	onModalMenu() {
		this.showModal = null;
	}

	ngOnDestroy() {
		this.editModeSub.unsubscribe();
		this.plChangedSub.unsubscribe();
	}
}
