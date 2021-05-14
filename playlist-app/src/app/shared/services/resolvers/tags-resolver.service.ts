import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';

// import { TagService } from './tag.service';
import { DataStorageService } from '../data-storage.service';
import { Tag } from '../../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagsResolver implements Resolve<Tag[]>{

  constructor(
              // private tagService: TagService,
              private storageService: DataStorageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.storageService.fetchTags();
  }
}