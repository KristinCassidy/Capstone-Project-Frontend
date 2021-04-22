import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../shared/playlist.service'

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  mode: string;
  //mode=dataForm
  //    show only "1. Enter title..."
  //mode=addCore
  //    show 1. 2.
  //    display playlist data through string interpolation
  //mode=addMedia
  //    show 1. 2. 3.
  //    display playlist data through string interpolation

  constructor(private playlistService: PlaylistService ) { }

  ngOnInit(): void {
    this.mode = 'dataForm';
  }

}
