import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Playlist } from 'src/app/shared/models/playlist.model';
import { PlaylistItem } from '../shared/models/playlist-item.model';
import { Tag } from '../shared/models/tag.model';
import { DataStorageService } from '../shared/services/data-storage.service';
import { PlaylistService } from '../shared/services/playlist.service';
import { TagService } from '../shared/services/tag.service';

@Component({
	selector: 'app-edit-playlist',
	templateUrl: './edit-playlist.component.html',
	styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent implements OnInit {
	// @ViewChild('f', { static: false }) playlistForm: NgForm;
	id: string;
	editPlaylistForm: FormGroup;
	playlistItems: PlaylistItem[];
	playlist;
	tags: Tag[];

	private updatedPlaylistSub: Subscription;
	
	constructor(
		private tagService: TagService,
		private playlistService: PlaylistService,
		private storageService: DataStorageService,
		// private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params
			.subscribe(
				(params: Params) => {
					this.id = params['id'];
					this.storageService.fetchPlaylist(this.id).subscribe();
				}
			);
		this.route.data.subscribe(
			(data: Data) => {
				this.playlist = data['playlist'];
				this.tags = this.playlist.tags;
				this.tagService.tagChanged.next(this.tags);
				// console.log(this.tags);
				this.playlistItems = this.playlist.playlistItems;
			}
		);
		this.editPlaylistForm = new FormGroup({
				'title': new FormControl(this.playlist.title, Validators.required),
				'desc': new FormControl(this.playlist.description),

				
	 	});
	}

	onSubmit() {
		const tags = this.tagService.getTags();
		// this.tagService.addTagsToLibrary(tags);
		// 	tags.forEach(tag =>
		// 		(this.storageService.createAndStoreTag(tag)));
			
		this.onUpdate();
		this.playlistService.editMode.next(false);
	}

	onUpdate() {
		const value = this.editPlaylistForm.value;
		console.log(this.editPlaylistForm.value);
		const tags = this.tagService.getTags();
		// this.playlist = this.playlist[this.id];
		this.playlist = new Playlist( value['title'], this.id, tags, value['desc'],this.playlistItems);

		this.playlistService.playlistCreated.next(this.playlist);
		this.storageService.putPlaylist(this.id, this.playlist);
		this.playlistService.mediaAdded.next(this.playlist);
			console.log(this.playlist);
		}
	
}