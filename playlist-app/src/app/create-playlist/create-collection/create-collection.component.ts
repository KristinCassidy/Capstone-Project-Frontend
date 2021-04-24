import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Playlist } from 'src/app/shared/playlist.model';
import { TagService } from './tag-form/tag.service';
import { PlaylistService } from '../playlist.service';


@Component({
  	selector: 'app-create-collection',
 	templateUrl: './create-collection.component.html',
    styleUrls: ['./create-collection.component.css'],
	host: {'class': 'create-pl'}
})

export class CreateCollectionComponent implements OnInit {
	createPlaylistForm: FormGroup;
	currentPlaylist: Playlist;

  	constructor(private tagService: TagService,
				private playlistService: PlaylistService,
				private router: Router,
				private route: ActivatedRoute) { }

  	ngOnInit() {
		this.createPlaylistForm = new FormGroup({
				'title': new FormControl('', Validators.required),
				'desc': new FormControl(null)
	 	});
		this.createPlaylistForm.patchValue({
				'title': 'New Playlist'
				// if 'New Playlist' has already been UseED, it should add +1 to the end
		});
		this.playlistService.fetchPlaylists();
	}

	onSubmit() {
		const tags = this.tagService.getTags();
		this.tagService.addTagsToLibrary(tags);
		// this.createPlaylistForm.reset();
		this.onCreate(this.createPlaylistForm);
		this.router.navigate(['core'], {relativeTo: this.route});

  	}

	onCreate(form: FormGroup) {
		const value = form.value
		const tags = this.tagService.getTags();
		const newPlayList = new Playlist( value.title, null, tags, value.desc, null);
		this.currentPlaylist = newPlayList;
		this.playlistService.playlistCreated.next(newPlayList);
		this.playlistService.postPlaylist(newPlayList);
		  console.log(newPlayList);
	  }
}
