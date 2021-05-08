
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({providedIn: 'root'})
export class TagService {
	tagChanged = new Subject<Tag[]>();
	tagsChanged = new Subject<Tag[]>();
	startedEditing = new Subject<number>();
	removeTag = new Subject<number>();

	constructor() {}
	
	private playlistTags: Tag[] = [];
	private tagLibrary: Tag[] = [];

	// setTags(tags: Tag[]) {
	// 	this.tagLibrary = tags;
	// 	this.tagsChanged.next(this.tagLibrary.slice());
	// }

	// TAG FORM
	getTags() {
		return this.playlistTags.slice();
	}

	addTag(tag: Tag) {
		this.playlistTags.push(tag);
		this.tagChanged.next(this.playlistTags.slice());
		// console.log(this.tags)
	}

	deleteTag(index: number) {
		this.playlistTags.splice(index, 1);
		this.tagChanged.next(this.playlistTags.slice());
	}

	// TAG LIBRARY
	addToTagLibrary(newTag: Tag) {
		this.tagLibrary.push(newTag);
		this.tagsChanged.next(this.tagLibrary.slice());
		// console.log(this.tagLibrary)
	}

	addTagsToLibrary(newTags: Tag[]) {
		newTags.forEach( newTag =>
			(this.tagLibrary.push(newTag))
		);
		this.tagsChanged.next(this.tagLibrary.slice());
		console.log(this.tagLibrary)
	}

	getTagLibrary() {
		return this.tagLibrary.slice();
	}

	//TAG LIBRARY -- EDIT
	// getTag(index: number) {
	// 	console.log(this.tagLibrary[index]);
	// 	return this.tagLibrary[index];

	// }

	// updateTag(index: number, newTag: Tag) {
	// 	this.tagLibrary[index] = newTag;
	// 	this.tagsChanged.next(this.tagLibrary.slice());
	// 	console.log(this.tagLibrary.slice())
	// 	return this.tagLibrary.slice();
	// }
	
	setTags(updatedTags: Tag[]) {
		this.tagLibrary = updatedTags;
		this.tagsChanged.next(this.tagLibrary.slice());
		
	}

}