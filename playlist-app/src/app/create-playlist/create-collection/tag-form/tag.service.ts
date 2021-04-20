import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tag } from '../../../shared/tag.model';

@Injectable({providedIn: 'root'})
export class TagService {
	tagChanged = new Subject<Tag[]>();
	tagsChanged = new Subject<Tag[]>();
	startedEditing = new Subject<number>();
	removeTag = new Subject<number>();
	tagPostUrl: string;

	constructor(public http: HttpClient){}
	
	private tags: Tag[] = [
		new Tag(0, 'music'),
		new Tag(1, 'art')
	];

	private tagLibrary: Tag[] = [
		new Tag(0, 'noir'),
		new Tag(1, 'new wave')
	];

	// TAG FORM
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
		this.tagChanged.next(this.tags.slice());
	}

	// TAG LIBRARY
	addToTagLibrary(newTag: Tag) {
		this.tagLibrary.push(newTag);
		this.tagsChanged.next(this.tagLibrary.slice());
		console.log(this.tagLibrary)
	}

	getTagLibrary() {
		return this.tagLibrary.slice();
	}


}