

export class PlaylistItem {
    id: number;

    constructor(id: number) {
        this.id = id;
    } 
}

export class QuoteItem extends PlaylistItem {
    quote: string;
    font: string;
    
    constructor(id: number, quote: string, font: string) {
        super(id)
        this.quote = quote;
        this.font = font;
    }
}

export class SongItem extends PlaylistItem {
    url: string;

    constructor(id: number, url: string) {
        super(id)   
        this.url = url;
    }
}

export class ImageItem extends PlaylistItem {
    imagePath: string;

    constructor(id: number, imagePath: string) {
        super(id)
        this.imagePath = imagePath;
    }
}

export class VideoItem extends PlaylistItem {
    url: string;

    constructor(id: number, url: string) {
        super(id)
        this.url = url;
    } 
}

