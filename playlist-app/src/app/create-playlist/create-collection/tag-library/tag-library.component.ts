import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription} from 'rxjs';


import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { Tag } from 'src/app/shared/models/tag.model';
import { TagService } from '../../../shared/services/tag.service';
import { ActivatedRoute, Data, Router } from '@angular/router';


@Component({
	selector: 'app-tag-library',
	templateUrl: './tag-library.component.html',
	styleUrls: ['./tag-library.component.css']
})
export class TagLibraryComponent implements OnInit, OnDestroy {
	@ViewChild('f', { static: false }) tagForm: NgForm;
	editMode = false;
	editedTagIndex: number;
	editedTag: Tag;
	updatedTag: Tag;
	loadedTags: Tag[] = [];
	isFetching = false;
	

	constructor(private tagService: TagService,
				private storageService: DataStorageService,
				private router: Router,
				private route: ActivatedRoute) { }

	tagsChangedSub: Subscription;
	editTagSub: Subscription;
	updateTagSub: Subscription;

	ngOnInit(): void {
		this.isFetching = true;
		this.route.data.subscribe(
			(data: Data) => {
				this.loadedTags = data['tags'];
				console.log(this.loadedTags);
			}
		);
		
		this.tagsChangedSub = this.tagService.tagsChanged.subscribe(
			(tags: Tag[]) => {
				this.loadedTags = tags
				console.log(this.loadedTags)
			}
		);
		this.editTagSub = this.tagService.startedEditing.subscribe(
			(index: number) => {
				this.editMode = true;
				this.editedTagIndex = index;
			}
		);
		this.updateTagSub = this.tagService.updateTag.subscribe(
			(tag: Tag) => {
				this.updatedTag = tag;
				console.log(this.updatedTag)
			}
		);
	}

	onSubmit(form: NgForm) {
		const value = form.value;
		if(this.editMode) {	
			this.onUpdateName(value.tagName);
			this.editMode = false;
			form.reset();

		} else {
			const newTag = new Tag(null, value.tagName);
			this.storageService.createAndStoreTag(newTag);
			form.reset();
		
			// this.tagService.tagsChanged.next(this.tags.slice());
			this.loadedTags.push(newTag)
		}
	}

	onUpdateName(newName: string) {
		this.editedTag.name = newName;
		this.loadedTags[this.editedTagIndex] = this.editedTag;
		this.tagService.tagsChanged.next(this.loadedTags.slice());
		// this.tagService.setTags(this.loadedTags.slice());
		this.storageService.putTag(this.updatedTag);
	}

	onEditTag(index: number) {
		this.editMode = true;
		this.editedTagIndex = index;
		this.editedTag = this.loadedTags[index];
		this.tagService.updateTag.next(this.editedTag);
		this.tagForm.setValue({
			tagName: this.editedTag.name
		})
	}

	onFetchTags() {
		this.isFetching = true;
		this.storageService.fetchTags().subscribe(tags => {
			this.loadedTags = tags;
			this.tagService.tagsChanged.next(this.loadedTags.slice())
			this.isFetching = false;
		});
	}

	onClearTags() {
		this.storageService.deleteTags().subscribe(() => {
			this.loadedTags = [];
		});
	}

	onDeleteTag() {
		this.tagService.deletefromLibrary(this.editedTagIndex);
		this.storageService.deleteTag(this.editedTag);
		// this.tagService.tagsChanged.next(this.loadedTags.slice());
		this.tagForm.reset();
		// this.onFetchTags();
		this.editMode = false;
	}

	ngOnDestroy(): void {
		this.tagsChangedSub.unsubscribe();
		this.updateTagSub.unsubscribe();
		this.editTagSub.unsubscribe();
	}

}
