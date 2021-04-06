import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-core',
  templateUrl: './add-core.component.html',
  styleUrls: ['./add-core.component.css']
})
export class AddCoreComponent implements OnInit {
  selected: boolean = false;
  addMedia: string = "Add Media";

  constructor() { }

  ngOnInit(): void {
  }

  onAddMedia() {
    this.selected = !this.selected;
  }
}
