import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  	selector: 'app-create-collection',
 	templateUrl: './create-collection.component.html',
    styleUrls: ['./create-collection.component.css']
})

export class CreateCollectionComponent implements OnInit {
	createPlaylistForm: FormGroup;
  
  	constructor() { }

  	ngOnInit() {
		this.createPlaylistForm = new FormGroup({
			playlistData: new FormGroup ({
				'title': new FormControl('New Playlist', Validators.required),
				'tags': new FormArray([])
			}),
			playlistMedia: new FormGroup ({
				'quote': new FormControl(null),
			})	
	 	});

		this.createPlaylistForm.patchValue({
			'playlistData': {
				'title': 'New Playlist'
			}
		});
	}

	onAddTag() {
		const control = new FormControl(null);
		(<FormArray>this.createPlaylistForm.get('playlistData.tags')).push(control);
	}

	getTags() {
		return(<FormArray>this.createPlaylistForm.get('tags')).controls;
		// return (this.createPlaylistForm.get('playlistData.tags')).controls;
	}

	onSubmit() {
		console.log(this.createPlaylistForm.value);
		this.createPlaylistForm.reset();
  	}
  
}
