import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-more-media',
  templateUrl: './add-more-media.component.html',
  styleUrls: ['./add-more-media.component.css']
})
export class AddMoreMediaComponent implements OnInit {
  selected: boolean = false;
  state: string = "normal";

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.selected = !this.selected;
    }

}
