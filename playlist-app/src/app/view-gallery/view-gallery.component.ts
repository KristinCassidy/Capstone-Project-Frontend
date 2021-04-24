import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../create-playlist/playlist.service';
import { Playlist } from '../shared/playlist.model';



@Component({
  selector: 'app-view-gallery',
  templateUrl: './view-gallery.component.html',
  styleUrls: ['./view-gallery.component.css']
})
export class ViewGalleryComponent implements OnInit {
  loadedPlaylists: Playlist[] = [];
  isFetching: boolean = false;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.isFetching = true;
    this.playlistService.fetchPlaylists().subscribe( playlists => {
      this.isFetching = false;
      this.loadedPlaylists = playlists;
    });
  }

  onFetchPlaylists() {
    this.isFetching = true;
    this.playlistService.fetchPlaylists().subscribe( playlists => {
      this.isFetching = false;
      this.loadedPlaylists = playlists;
    });
  }

  onClearPlaylists() {
    this.playlistService.deletePlaylists().subscribe(() => {
      this.loadedPlaylists = [];
    })
  }

  onOpenPlaylist(index: number) {
    this.playlistService.openPlaylist.next(index);

  }
}
