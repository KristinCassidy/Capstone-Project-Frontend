import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

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
	@ViewChild('f', { static: false }) tagForm: NgForm;
	id: string;
	editPlaylistForm: FormGroup;
	playlistItems: PlaylistItem[];
	playlist;
	tags: Tag[];
	// plTitle: string;
	// plDescription: string;
	// plTags: Tag[];
	// plItems: PlaylistItem[];
	
	constructor(
		private tagService: TagService,
		private playlistService: PlaylistService,
		private storageService: DataStorageService,
		
		private router: Router,
		private route: ActivatedRoute) { }

		
	ngOnInit(): void {
		this.route.params
			.subscribe(
				(params:Params) => {
					this.id = params['id'];
					this.storageService.fetchPlaylist(this.id).subscribe();
				}
			);
		this.route.data.subscribe(
			(data: Data) => {
				this.playlist = data['playlist'];
				this.tags = this.playlist.tags;
				console.log(this.tags);
			}
		);
		this.editPlaylistForm = new FormGroup({
				'title': new FormControl(this.playlist.title, Validators.required),
				'desc': new FormControl(this.playlist.description),
				'playlistItems': new FormGroup({
					'item1': new FormControl(null),
					'item2': new FormControl(null),
					'item3': new FormControl(null),
					'item4': new FormControl(null),
					'item5': new FormControl(null)
				})
			
	 	});
	}

	onSubmit() {
		const tags = this.tagService.getTags();
		this.tagService.addTagsToLibrary(tags);
			tags.forEach(tag =>
				(this.storageService.createAndStoreTag(tag)));

		this.onUpdate(this.editPlaylistForm.value);
		this.playlistService.editMode.next(false);
		}

	onUpdate(form: NgForm) {
		const value = form.value
		const tags = this.tagService.getTags();
		this.playlist = this.playlist[this.id];
		this.playlist = new Playlist( value['title'], this.id, tags, value['desc'],this.playlistItems);

		this.playlistService.playlistCreated.next(this.playlist);
		this.storageService.putPlaylist(this.id, this.playlist);
			console.log(this.playlist);
		}
	
				
	//   addTagsToLibrary(newTags: Tag[]) {
	// 	newTags.forEach( newTag =>
	// 		(this.tagLibrary.push(newTag))
	// 	);
	// 	this.tagsChanged.next(this.tagLibrary.slice());
	// 	console.log(this.tagLibrary)
	// }
}