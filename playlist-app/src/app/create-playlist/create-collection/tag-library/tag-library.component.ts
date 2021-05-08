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
	tag: string;
	tags: Tag[] = [];
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
		this.getTags();
		this.tagsChangedSub = this.tagService.tagsChanged.subscribe(
			(tags: Tag[]) => {
				this.loadedTags = tags
			});
		this.editTagSub = this.tagService.startedEditing
		    .subscribe(
		      (index: number) => {
		        this.editMode = true;
				this.editedTagIndex = index;
		      }
		    )
		

		// this.tags = this.tagService.getTagLibrary();
	}

	

	onSubmit(form: NgForm) {
		const value = form.value;
		if(this.editMode) {
			this.onUpdate(value.tagName);
			this.editMode = false;
		} else {
			const newTag = new Tag(null, value.tagName);
			this.storageService.createAndStoreTag(newTag);
			// const tags = this.storageService.fetchTags();
			// this.tagService.tagsChanged.next(this.tags.slice());
			// this.onFetchTags();
			// console.log(this.loadedTags.slice())
			
		}
		form.reset();
	}

			onUpdate(newName: string) {
				this.editedTag.name = newName;
				this.loadedTags[this.editedTagIndex] = this.editedTag;
				this.tagService.tagsChanged.next(this.loadedTags.slice());
				this.storageService.setTags(this.loadedTags.slice());
				// this.storageService.updateTag(this.editedTagIndex,this.editedTag);
				// this.storageService.setTags;
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
			this.isFetching = false;
			this.loadedTags = tags;
			this.tagService.tagsChanged.next(this.loadedTags.slice())
		});
	}

	onClearTags() {
		this.storageService.deleteTags().subscribe(() => {
			this.loadedTags = [];
		});
	}

	getTags() {
		this.storageService.fetchTags().subscribe(tagsArray => {
			this.isFetching = false;
			this.loadedTags = tagsArray;
		});	
	}

	// onSaveTags() {
	// 	this.storageService.putTags();
	// }

	ngOnDestroy(): void {
		this.tagsChangedSub.unsubscribe();
	}

}
