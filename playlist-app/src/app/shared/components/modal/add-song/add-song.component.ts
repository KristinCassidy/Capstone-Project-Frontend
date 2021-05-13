import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongItem } from 'src/app/shared/models/playlist-item.model';
// import { SongItem } from '../../models/playlist-item.model';

@Component({
	selector: 'app-add-song',
	templateUrl: './add-song.component.html',
	styleUrls: ['./add-song.component.css'],
	host: {'class': 'mod-cont'}
})
export class AddSongComponent implements OnInit {
	menuHeader: string = 'Add Song:';
	
	constructor() { }

	ngOnInit(): void {
	}

	onSubmit(form: NgForm) {
		const value = form.value;
		const song = new SongItem(null, value.url, value.name);
		// this.createPlaylistService.addCoreToPlaylist(quote);
		// this.createPlaylistService.coreAdded.next(quote);
		// this.router.navigate(['../../add-media'], {relativeTo: this.route});
		
		// this.quoteAdded.next(quote);
		console.log(song);
	
	  }

}
