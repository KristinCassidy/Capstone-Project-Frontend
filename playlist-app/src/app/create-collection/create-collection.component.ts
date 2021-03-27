import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  defaultTitle: string = 'New Playlist';
  tags: Array<string>;
  constructor() { }

  ngOnInit() {
    this.createPlaylistForm = new FormGroup({
      'playlistData': new FormGroup({
        'playlistTitle': new FormControl('New Playlist', Validators.required),
      })
    })
  }

  onSubmit() {
    console.log(form.value)
    form.reset();
    
    addTag() {
      this.form.push('tags');
    }
  }
}
