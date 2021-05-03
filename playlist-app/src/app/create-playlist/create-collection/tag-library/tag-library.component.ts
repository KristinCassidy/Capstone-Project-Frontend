import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { Tag } from 'src/app/shared/models/tag.model';
import { TagService } from '../../../shared/services/tag.service';

@Component({
	selector: 'app-tag-library',
	templateUrl: './tag-library.component.html',
	styleUrls: ['./tag-library.component.css']
})
export class TagLibraryComponent implements OnInit {
	tag: string;
	tags: Tag[] = [];
	editMode = false;
	loadedTags: Tag[] = [];
	isFetching = false;

	private tagsChangedSub: Subscription;

	constructor(private tagService: TagService,
				private storageService: DataStorageService) { }

	ngOnInit(): void {
		this.isFetching = true;
		this.storageService.fetchTags().subscribe(tags => {
			this.isFetching = false;
			this.loadedTags = tags;
		});

		// this.tags = this.tagService.getTagLibrary();
		// this.tagsChangedSub = this.tagService.tagsChanged
		// 	.subscribe(
		//   		(tags: Tag[]) => {
		//     	this.tags = tags;
		//   		}
		// 	);
	}

	onSubmit(form: NgForm) {
		const value = form.value;
		const newTag = new Tag(null, value.tagName);
		this.storageService.createAndStoreTag(newTag);
		form.reset();
	}

	// onCreateTag(tagData: Tag) {
	// 	this.storageService.createAndStoreTag(tagData)
	// 	console.log(tagData);
	// }

	onEditTag(index: number) {
		this.tagService.startedEditing.next(index);

	}

	onFetchTags() {
		this.isFetching = true;
		this.storageService.fetchTags().subscribe(tags => {
			this.isFetching = false;
			this.loadedTags = tags;
		});
	}

	onClearTags() {
		this.storageService.deleteTags().subscribe(() => {
			this.loadedTags = [];
		});
	}

	// onSaveTags() {
	// 	this.storageService.putTags();
	// }

}
