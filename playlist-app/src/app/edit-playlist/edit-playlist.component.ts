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
	@ViewChild('f', { static: false }) playlistForm: NgForm;
	id: string;
	editPlaylistForm: FormGroup;
	playlistItems: PlaylistItem[];
	@Input()playlist: Playlist;
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
				this.playlistItems = this.playlist.playlistItems;
			}
		);
		// this.playlistForm.form.patchValue({
		// 			title: this.playlist.title,
		// 			desc: this.playlist.description
		// 		})
			
		
		// this.tagService.tagChanged.subscribe()
		this.editPlaylistForm = new FormGroup({
				'title': new FormControl(this.playlist.title, Validators.required),
				'desc': new FormControl(this.playlist.description)
	 	});
	}

	onSubmit(form: NgForm) {
		const value = form.value;
		const tags = this.tagService.getTags();
		this.tagService.addTagsToLibrary(tags);
			tags.forEach(tag =>
				(this.storageService.createAndStoreTag(tag)));
		const playlistItems = this.playlistItems;
		
		this.playlist = this.playlist[this.id];
		this.playlist = new Playlist( value['title'], this.id, tags, value['desc'], playlistItems);
		// this.onUpdate(this.editPlaylistForm.value);
		this.playlistService.editMode.next(false);
		this.storageService.putPlaylist(this.id, this.playlist);
			console.log(this.playlist);
		}
	
}