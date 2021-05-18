import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PlaylistItem, ImageItem } from 'src/app/shared/models/playlist-item.model';
import { Playlist } from 'src/app/shared/models/playlist.model';
import { PlaylistService } from 'src/app/shared/services/playlist.service';

@Component({
	selector: 'app-item-form',
	templateUrl: './item-form.component.html',
	styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit, OnDestroy {
	@ViewChild('f') playlistItemForm: NgForm;
	updatePlaylistSub: Subscription;
	playlist: Playlist;
	itemArray: PlaylistItem[] = [];
	imagePath: string = '';

	constructor(private playlistService: PlaylistService) { }

	ngOnInit(): void {
		this.updatePlaylistSub = this.playlistService.openPlaylist.subscribe(
			(playlist: Playlist) => {
				this.playlist = playlist;
				this.itemArray = this.playlist.playlistItems;


			}
		);
	}

	onAddItem(form: NgForm) {
		const value = form.value;
		const newItem = new ImageItem(null, value.itemUrl, value.itemName);
		// this.itemArray.push(newItem);
		// this.playlist.playlistItems = this.itemArray;
		this.playlistService.addItem(newItem);
		form.reset();

	}



	ngOnDestroy() {
		this.updatePlaylistSub.unsubscribe();
	}

}




// 'playlistItems': new FormGroup({
//   'item1': new FormControl(this.playlistItems[0]),
//   'item2': new FormControl(this.playlistItems[1]),
//   'item3': new FormControl(this.playlistItems[2]),
//   'item4': new FormControl(this.playlistItems[3]),
//   'item5': new FormControl(this.playlistItems[4])
// })