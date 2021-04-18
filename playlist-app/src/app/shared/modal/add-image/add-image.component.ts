import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  menuHeader: string = 'Add Image:';
  constructor() { }

  ngOnInit(): void {
  }

}
