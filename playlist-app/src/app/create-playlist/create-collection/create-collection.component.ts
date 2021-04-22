import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Playlist } from 'src/app/shared/playlist.model';
import { TagService } from './tag-form/tag.service';

@Component({
  	selector: 'app-create-collection',
 	templateUrl: './create-collection.component.html',
    styleUrls: ['./create-collection.component.css'],
	host: {'class': 'create-pl'}
})

export class CreateCollectionComponent implements OnInit {
	createPlaylistForm: FormGroup;

  	constructor(private tagService: TagService) { }

  	ngOnInit() {
		this.createPlaylistForm = new FormGroup({
				'title': new FormControl('', Validators.required),
				'desc': new FormControl(null)
	 	});
		// this.createPlaylistForm.patchValue({
			// 'playlistData': {
				// 'title': 'New Playlist'
				// if 'New Playlist' has already been UseED, it should add +1 to the end
			// }
		// });
	}

	onSubmit() {
		// console.log(this.createPlaylistForm.value);
		const tags = this.tagService.getTags();
		this.tagService.addTagsToLibrary(tags);
		// this.createPlaylistForm.reset();
		this.onCreate(this.createPlaylistForm);
  	}

	  onCreate(form: FormGroup) {
		  const value = form.value
		  const tags = this.tagService.getTags();
		//   console.log(tags);
		  const newPlayList = new Playlist( value.title, null, tags, value.description, null)
		  console.log(newPlayList);
		//  Push tags to tagsLibrary
		// add tags to the playlist object

	  }
  
}
