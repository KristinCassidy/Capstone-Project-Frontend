import { HttpClient } from "@angular/common/http";

import { Playlist } from './playlist.model';
import { QuoteItem, SongItem, ImageItem, VideoItem} from './playlist-item.model';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PlaylistService {

    constructor(public http: HttpClient){}

    public playlists: Playlist[] = [
        new Playlist('Test Playlist', 1, 'test description', [
            new QuoteItem(1, 'test quote', 'courier'),
            new SongItem(2,'https://open.spotify.com/track/1RaJMyCatBXw5hGCpVzTp4?si=U2K8Elr-SLGQBdCEUAorAg'),
            new ImageItem(3, 'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg'),
            new VideoItem(4,'https://youtu.be/WDlZ_SXx5gA')
        ]),
    ]
   
    postPlaylist() {}

    getPlaylist() {}
}






   


