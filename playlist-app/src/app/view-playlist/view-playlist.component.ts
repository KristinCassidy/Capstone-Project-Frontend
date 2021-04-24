import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlaylistService } from '../create-playlist/playlist.service';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.css']
})
export class ViewPlaylistComponent implements OnInit,OnDestroy {
  playlistOpenedSub: Subscription;
  selectedPlaylistIndex: number;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistOpenedSub = this.playlistService.openPlaylist
      .subscribe(
        (index: number) => {
          this.selectedPlaylistIndex = index;
        }
      );
  }

  ngOnDestroy() {
    this.playlistOpenedSub.unsubscribe();
  }

}
