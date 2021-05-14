import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {

  }

}




// 'playlistItems': new FormGroup({
//   'item1': new FormControl(this.playlistItems[0]),
//   'item2': new FormControl(this.playlistItems[1]),
//   'item3': new FormControl(this.playlistItems[2]),
//   'item4': new FormControl(this.playlistItems[3]),
//   'item5': new FormControl(this.playlistItems[4])
// })