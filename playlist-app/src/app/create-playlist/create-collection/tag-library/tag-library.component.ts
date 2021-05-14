import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription} from 'rxjs';


import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { Tag } from 'src/app/shared/models/tag.model';
import { TagService } from '../../../shared/services/tag.service';
import { ActivatedRoute, Router } from '@angular/router';


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
	loadedTags: Tag[] = [];
	isFetching = false;

	constructor(private tagService: TagService,
				private storageService: DataStorageService,
				private router: Router,
				private route: ActivatedRoute) { }

	tagsChangedSub: Subscription;
	editTagSub: Subscription;

	ngOnInit(): void {
		this.isFetching = true;
		this.onFetchTags();
		this.tagsChangedSub = this.tagService.tagsChanged.subscribe(
			(tags: Tag[]) => {
				this.loadedTags = tags
			}
		);
		this.editTagSub = this.tagService.startedEditing
		    .subscribe(
		      	(index: number) => {
		        	this.editMode = true;
					this.editedTagIndex = index;
		      	}
		    )
	}

	onSubmit(form: NgForm) {
		const value = form.value;
		if(this.editMode) {
			this.onUpdate(value.tagName);
			this.editMode = false;
			form.reset();
		} else {
			const newTag = new Tag(null, value.tagName);
			this.storageService.createAndStoreTag(newTag);
			form.reset();
			// this.tagService.tagsChanged.next(this.tags.slice());
			console.log(this.loadedTags.push(newTag))
			
		}
	}

	onUpdate(newName: string) {
		this.editedTag.name = newName;
		this.loadedTags[this.editedTagIndex] = this.editedTag;
		
		this.tagService.tagsChanged.next(this.loadedTags.slice());
		this.tagService.setTags(this.loadedTags.slice());
		// this.storageService.updateTag(this.editedTagIndex,this.editedTag);
		this.storageService.putTags(this.loadedTags.slice());
	}

	onEditTag(index: number) {
		this.editMode = true;
		this.editedTagIndex = index;
		this.editedTag = this.loadedTags[index];
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
		this.storageService.deleteTag(this.editedTag)
		this.tagForm.reset();
		this.editMode = false;
	}

	ngOnDestroy(): void {
		this.tagsChangedSub.unsubscribe();
	}

}
