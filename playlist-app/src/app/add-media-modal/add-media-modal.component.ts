import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-media-modal',
  templateUrl: './add-media-modal.component.html',
  styleUrls: ['./add-media-modal.component.css']
})
export class AddMediaModalComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
