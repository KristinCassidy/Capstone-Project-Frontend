import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css'],
  // host: {'class': 'modal-box'}
})
export class AddVideoComponent implements OnInit {
  menuHeader: string = 'Add Video:'
  imgPath: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
