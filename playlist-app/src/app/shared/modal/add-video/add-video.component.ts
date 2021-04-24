import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css'],
  host: {'class': 'mod-cont'}

})
export class AddVideoComponent implements OnInit {
  menuHeader: string = 'Add Video:'
  imgPath: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {}

}
