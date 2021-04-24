import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImageItem } from '../../playlist-item.model';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css'],
  host: {'class': 'mod-cont'}
})
export class AddImageComponent implements OnInit {
  menuHeader: string = 'Add Image:';

  constructor() { }

  ngOnInit(): void {
  }

  onAddImage(form: NgForm) {
    const value = form.value;
    const image = new ImageItem(null, value.imagePath, value.name);
    console.log(image);
  }

}