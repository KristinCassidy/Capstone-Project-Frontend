

export class PlaylistItem {
    id: string;
    name: string;
    imagePath: string;

    constructor(id: string, name: string, imagePath: string) {
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
    } 
}

export class QuoteItem extends PlaylistItem {
    quote: string;
    font?: string;
    
    constructor(id: string, quote: string, name: string, font: string, imagePath: string ) {
        super(id,name,imagePath)
        this.quote = quote;
        this.name = name;
        this.font = font;
        this.imagePath = imagePath;
    }
}

export class SongItem extends PlaylistItem {

    constructor(id: string, imagePath: string, name: string) {
        super(id, name, imagePath)   
    }
}

export class ImageItem extends PlaylistItem {

    constructor(id: string, imagePath: string, name: string) {
        super(id, name, imagePath)
    }
}

export class VideoItem extends PlaylistItem {

    constructor(id: string, imagePath: string, name: string) {
        super(id, name, imagePath)
    } 
}

