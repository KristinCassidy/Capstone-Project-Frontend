

export class PlaylistItem {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    } 
}

export class QuoteItem extends PlaylistItem {
    quote: string;
    font?: string;
    
    constructor(id: number, quote: string, name: string, font: string) {
        super(id,name)
        this.quote = quote;
        this.name = name;
        this.font = font;
    }
}

export class SongItem extends PlaylistItem {
    url: string;

    constructor(id: number, url: string, name: string) {
        super(id, name)   
        this.url = url;
    }
}

export class ImageItem extends PlaylistItem {
    imagePath: string;

    constructor(id: number, imagePath: string, name: string) {
        super(id, name)
        this.imagePath = imagePath;
    }
}

export class VideoItem extends PlaylistItem {
    url: string;

    constructor(id: number, url: string, name: string) {
        super(id, name)
        this.url = url;
    } 
}

