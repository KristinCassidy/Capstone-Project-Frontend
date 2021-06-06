import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaylistItem, ImageItem } from 'src/app/shared/models/playlist-item.model';
import { Playlist } from 'src/app/shared/models/playlist.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { PlaylistService } from 'src/app/shared/services/playlist.service';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.css']
})
export class ItemsFormComponent implements OnInit {
	@ViewChild('f') ItemsForm: NgForm;
	updatePlaylistSub: Subscription;
	playlist: Playlist;
	itemArray: PlaylistItem[] = [];
	imagePath: string = '';
	@Input() id: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {}

}
