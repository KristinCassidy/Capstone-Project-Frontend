import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  	selector: 'app-create-collection',
 	templateUrl: './create-collection.component.html',
    styleUrls: ['./create-collection.component.css'],
	host: {'class': 'create-pl'}
})

export class CreateCollectionComponent implements OnInit {
	createPlaylistForm: FormGroup;
  	constructor() { }

  	ngOnInit() {
		this.createPlaylistForm = new FormGroup({
			playlistData: new FormGroup ({
				'title': new FormControl('New Playlist', Validators.required),
				'tags': new FormArray([new FormControl(null, Validators.required)]),
				'desc': new FormControl(null)
			}),
			// playlistMedia: new FormGroup ({
			// 	// 'quote': new FormControl(null),
			// })	
	 	});
		this.createPlaylistForm.patchValue({
			'playlistData': {
				'title': 'New Playlist'
				// if 'New Playlist' has already been UseExistingWebDriver, it should add +1 to the end
			}
		});
	}

	onAddTag() {
		const tagControl = new FormControl(null, Validators.required);
		(<FormArray>this.createPlaylistForm.get('playlistData.tags')).push(tagControl);
	}

	getControls() {
		return (<FormArray>this.createPlaylistForm.get('playlistData.tags')).controls;
		// (this.createPlaylistForm.get('playlistData.tags')as FormArray).controls;
	}

	onSubmit() {
		console.log(this.createPlaylistForm.value);
		// this.createPlaylistForm.reset();
  	}
  
}
