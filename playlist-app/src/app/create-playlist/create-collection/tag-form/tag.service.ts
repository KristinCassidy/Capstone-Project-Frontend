import { Subject } from 'rxjs';
import { Tag } from '../../../shared/tag.model';

export class TagService {
    tagChanged = new Subject<Tag[]>();
    private tags: Tag[] = [
        new Tag(0, 'music'),
        new Tag(1, 'art')
    ];

    getTags() {
        return this.tags.slice();
    }

    addTag(tag: Tag) {
        this.tags.push(tag);
        this.tagChanged.next(this.tags.slice());
        console.log(this.tags)
    }

    deleteTag(index: number) {
        this.tags.splice(index, 1);
    }


}