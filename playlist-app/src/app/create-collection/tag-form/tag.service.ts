
import { Tag } from '../../shared/tag.model';

export class TagService {
    private tags: Tag[] = [
        new Tag(0, 'music'),
        new Tag(1, 'art')
    ];

    getTags() {
        return this.tags.slice();
    }

    addTag(tag: Tag) {
        this.tags.push(tag);
    }

    deleteTag(index: number) {
        this.tags.splice(index, 1);
    }


}