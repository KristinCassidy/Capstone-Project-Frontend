import { Tag } from './tag.model';
import { PlaylistItem } from './playlist-item.model';

export class Playlist {
    public title: string;
    public id: number;
    public tags: Tag[];
    public description: string;
    public playlistItems: PlaylistItem[];

    constructor(title: string, id: number, desc: string, playlistItems: PlaylistItem[]) {
        this.title = title;
        this.id = id;
        this.description = desc;
        this.playlistItems = playlistItems;
    }
}