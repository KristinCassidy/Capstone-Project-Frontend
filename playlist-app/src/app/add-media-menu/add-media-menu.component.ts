import { trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-media-menu',
  templateUrl: './add-media-menu.component.html',
  styleUrls: ['./add-media-menu.component.css'],
  animations: [
    trigger
  ]
})
export class AddMediaMenuComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
