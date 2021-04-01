import { Playlist } from './playlist.model';
import { PlaylistItem, QuoteItem} from './playlist-item.model';

export class PlaylistService {

    public playlists: Playlist[] = [
        new Playlist('Test Playlist', 1, 'test description', [
            new QuoteItem(1, 'test quote', 'courier')
        ]),
    ]
}