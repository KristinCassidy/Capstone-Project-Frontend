

export class PlaylistItem {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    } 
}

export class QuoteItem extends PlaylistItem {
    quote: string;
    font?: string;
    
    constructor(id: string, quote: string, name: string, font: string) {
        super(id,name)
        this.quote = quote;
        this.name = name;
        this.font = font;
    }
}

export class SongItem extends PlaylistItem {
    url: string;

    constructor(id: string, url: string, name: string) {
        super(id, name)   
        this.url = url;
    }
}

export class ImageItem extends PlaylistItem {
    imagePath: string;

    constructor(id: string, imagePath: string, name: string) {
        super(id, name)
        this.imagePath = imagePath;
    }
}

export class VideoItem extends PlaylistItem {
    url: string;

    constructor(id: string, url: string, name: string) {
        super(id, name)
        this.url = url;
    } 
}

