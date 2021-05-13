import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {
  openSearch = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(event: Event) {
    let sidebar = document.getElementById("sidebar");
      if ( sidebar.className !== "active") {
        sidebar.className = "active";
      } else {
        sidebar.className = "";
      };
  } 

}
