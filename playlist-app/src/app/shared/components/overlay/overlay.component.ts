import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  // animations: [
  //   trigger('overlayState', [
  //     state('normal', style({
  //       'backgroundColor': 'none',
  //     })),
  //     state('active', style({
  //       'backgroundColor': 'rgba(0, 0, 0, 0.6)',
  //     })),
  //     transition('normal <=> active', animate(1000))
  //   ])

  // ]
})
export class OverlayComponent implements OnInit {
  state: string = 'normal';

  constructor() { }

  ngOnInit(): void {
    // this.onAnimate();
  }

  // onAnimate() {
  //   this.state == 'normal' ? this.state = 'active' : this.state = 'normal';
  //   }

}
