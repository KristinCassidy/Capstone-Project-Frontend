import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  animations: [
		trigger('iconState', [
			state('normal', style({
				opacity: 0.3,
				transform:'translateX(-50px) translateY(50px)',
				'z-index': -1
			})),
			state('selected', style({
				opacity: 1,
				transform:'translateX(10px) translateY(0px)',
				'z-index': 100
			})),
			transition('normal <=> selected', [
				animate(1000, keyframes([
					style({
						transform: 'translateX(-50px) translateY(50px)',
						opacity: 0,
						'z-index': -1,
						offset: 0
					}),
					style({
						transform: 'translateX(0px) translateY(50px)',
						opacity: 0.2,
						'z-index': -1,
						offset: 0.3
					}),
					style({
						transform: 'translateX(10px) translateY(0px)',
						opacity: 1,
						'z-index': 100,
						offset: 1
					}),

				]))
			])
		]),
		trigger('coreState', [
			state('normal', style({
			  	transform:'rotate(0deg)',
			  	'z-index': 100
			})),
			state('selected', style({
			  	opacity: 1,
			 	transform:'rotate(-45deg)',
			  	'z-index': 100
			})),
			transition('normal => selected', animate(1000))
		])
	]

})
export class AddItemComponent implements OnInit {
  selected: boolean = false;
  state: string = "normal";

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'selected' : this.state = 'normal';
    }
  
    onSelected() {
    this.selected = !this.selected;
    }

}
