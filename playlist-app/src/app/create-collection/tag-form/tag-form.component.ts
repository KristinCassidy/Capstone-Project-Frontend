import { Component, OnInit } from '@angular/core';

import { Tag } from '../../shared/tag.model';
import { TagService } from './tag.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css'],
  host: {'class': 'col-xs-12'}
})
export class TagFormComponent implements OnInit {
  tags: Tag[];

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tags = this.tagService.getTags();
  }

  onAddTag(){
    
  }

}
