import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/shared/tag.model';
import { TagService } from '../tag-form/tag.service';

@Component({
	selector: 'app-tag-library',
	templateUrl: './tag-library.component.html',
	styleUrls: ['./tag-library.component.css']
})
export class TagLibraryComponent implements OnInit {
	tag: string;
	tags: Tag[] = [];
	editMode = false;

	private tagsChangedSub: Subscription;

	constructor(public tagService: TagService) { }

	ngOnInit(): void {
		this.tags = this.tagService.getTagLibrary();
		this.tagsChangedSub = this.tagService.tagsChanged
			.subscribe(
		  		(tags: Tag[]) => {
		    	this.tags = tags;
		  		}
			);
	}

	onSubmit(form: NgForm) {
		this.onAddToLibrary(form);
	}

	onAddToLibrary(form: NgForm) {
		// this.tags.push(this.tagService.getTags())
		const value = form.value;
		const newTag = new Tag(null, value.tagName);
		// add logic to parse the tag library for duplicate tags
		this.tagService.addToTagLibrary(newTag);
		form.reset();
	}

	onEditTag(index: number) {
		this.tagService.startedEditing.next(index);

	}

}
