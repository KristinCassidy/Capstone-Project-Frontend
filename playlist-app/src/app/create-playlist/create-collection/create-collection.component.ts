import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Playlist } from 'src/app/shared/models/playlist.model';
import { TagService } from '../../shared/services/tag.service';
import { PlaylistService } from '../../shared/services/playlist.service';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';


@Component({
  	selector: 'app-create-collection',
 	templateUrl: './create-collection.component.html',
    styleUrls: ['./create-collection.component.css'],
	host: {'class': 'create-pl'}
})

export class CreateCollectionComponent implements OnInit {
	createPlaylistForm: FormGroup;
	id: string;
	// currentPlaylist: Playlist;

  	constructor(private tagService: TagService,
				private playlistService: PlaylistService,
				private storageService: DataStorageService,
				private router: Router,
				private route: ActivatedRoute) { }

  	ngOnInit() {
		this.createPlaylistForm = new FormGroup({
				'title': new FormControl('', Validators.required),
				'desc': new FormControl(null),
				'item1': new FormControl(null),
				'item2': new FormControl(null),
				'item3': new FormControl(null),
				'item4': new FormControl(null),
				'item5': new FormControl(null),
	 	});
		// this.createPlaylistForm.patchValue({
				//'title': 'New Playlist'
				// if 'New Playlist' has already been UseED, it should add +1 to the end
		// });
		// this.storageService.fetchPlaylists();
	}

	onSubmit() {
		const tags = this.tagService.getTags();
			this.tagService.addTagsToLibrary(tags);
			tags.forEach(tag =>
				(this.storageService.createAndStoreTag(tag)));
		// this.createPlaylistForm.reset();
		this.onCreate(this.createPlaylistForm);
		this.playlistService.playlistPosted.subscribe(
			id => {
				this.id = id
				console.log(this.id)
				this.storageService.fetchPlaylist(this.id).subscribe(
					pl => {
						console.log(pl);
						this.router.navigate(['core', this.id], {relativeTo: this.route});
					}
				)
			}
		)
		// this.router.navigate(['core', this.id], {relativeTo: this.route});

  	}

	onCreate(form: FormGroup) {
		const value = form.value
		const tags = this.tagService.getTags();
		const items = this.addItemsToPl(form);

		const newPlayList = new Playlist( value.title, null, tags, value.desc, []);
		// this.currentPlaylist = newPlayList;
		this.playlistService.playlistCreated.next(newPlayList);
		this.storageService.postPlaylist(newPlayList);
		  console.log(newPlayList);
	}

	addItemsToPl(form) {
		const items = form.value
	}
	

	//   addTagsToLibrary(newTags: Tag[]) {
	// 	newTags.forEach( newTag =>
	// 		(this.tagLibrary.push(newTag))
	// 	);
	// 	this.tagsChanged.next(this.tagLibrary.slice());
	// 	console.log(this.tagLibrary)
	// }
}
