import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Tag } from '../../../shared/tag.model';
import { TagService } from './tag.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css'],
  host: {'class': 'col-xs-12'}
})
export class TagFormComponent implements OnInit, OnDestroy {
  tags: Tag[];
  private tagChangedSub: Subscription;
  tag;

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tags = this.tagService.getTags();
    this.tagChangedSub = this.tagService.tagChanged
      .subscribe(
        (tags: Tag[]) => {
          this.tags = tags;
        }
      );
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
