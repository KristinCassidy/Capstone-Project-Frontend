import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Tag } from '../../../shared/models/tag.model';
import { TagService } from '../../../shared/services/tag.service';

@Component({
	selector: 'app-tag-form',
	templateUrl: './tag-form.component.html',
	styleUrls: ['./tag-form.component.css'],
	host: {'class': 'col-xs-12'}
})
export class TagFormComponent implements OnInit, OnDestroy {
	@Input()tags: Tag[];
	private tagChangedSub: Subscription;

	constructor(private tagService: TagService) { }

	ngOnInit(): void {
		this.tagChangedSub = this.tagService.tagChanged
			.subscribe(
				(tags: Tag[]) => {
					this.tags = tags;
				}
			);
		if(this.tags) {
			this.tagService.setTagForm(this.tags);
		}
	}

	ngOnDestroy(): void {
		this.tagChangedSub.unsubscribe();
	}
	
	onAddTag(form: NgForm) {
		const value = form.value;
		const newTag = new Tag(null, value.tagName);
		this.tagService.addTag(newTag);
		form.reset();
	}

	onDelete(index: number) {
		this.tagService.deleteTag(index);
	}

}
