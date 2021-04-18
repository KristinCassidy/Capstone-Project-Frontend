import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../shared/playlist.service';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.css']
})
export class ViewPlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
