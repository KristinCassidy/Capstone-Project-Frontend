import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaylistItem, ImageItem } from 'src/app/shared/models/playlist-item.model';
import { Playlist } from 'src/app/shared/models/playlist.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { PlaylistService } from 'src/app/shared/services/playlist.service';

@Component({
	selector: 'app-item-form',
	templateUrl: './item-form.component.html',
	styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
	@ViewChild('f') playlistItemForm: NgForm;
	updatePlaylistSub: Subscription;
	playlist: Playlist;
	itemArray: PlaylistItem[] = [];
	imagePath: string = '';
	@Input() id: string;

	constructor(private playlistService: PlaylistService, 
				private storageService: DataStorageService,
				private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params
		.subscribe(
			(params: Params) => {
				this.id = params['id'];
			}
		);
		this.route.data.subscribe(
			(data: Data) => {
				this.playlist = data['playlist'];
				console.log(this.playlist)
				if (this.playlist.playlistItems) {
					this.itemArray = this.playlist.playlistItems;
				} else {
					this.playlist.playlistItems = [];
				}
				console.log(this.playlist)
			}
		);
	}

	onAddItem(form: NgForm) {
		const value = form.value;
		const newItem = new PlaylistItem(null, value.itemName, value.itemUrl);
		console.log(newItem)
		// itemArray: PlaylistItem[] = [];
		this.playlist.playlistItems.push(newItem);
		// this.playlist.playlistItems = this.itemArray;
		this.storageService.putItems(this.id,this.playlist.playlistItems.slice()).subscribe();
		form.reset();

	}

}
