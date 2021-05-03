import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { PlaylistService } from '../../shared/services/playlist.service';

@Component({
  	selector: 'app-add-core',
  	templateUrl: './add-core.component.html',
	styleUrls: ['./add-core.component.css'],
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
				'z-index': 60
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
						'z-index': 60,
						offset: 1
					}),

				]))
			])
		]),
		trigger('coreState', [
			state('normal', style({
			  	transform:'rotate(0deg)',
			  	'z-index': 60
			})),
			state('selected', style({
			  	opacity: 1,
			 	transform:'rotate(-45deg)',
			  	'z-index': 60
			})),
			transition('normal => selected', animate(1000))
		])
	]	
})

export class AddCoreComponent implements OnInit {
  selected: boolean = false;
  state: string = "normal";

  @Input() showModal: boolean = false;
  uploadType: string;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
	//   ng sthis.playlistService.updatePlaylist();
  }

  onAnimate() {
	this.state == 'normal' ? this.state = 'selected' : this.state = 'normal';
  }

  onSelected() {
	this.selected = !this.selected;
  }
  
  onModalMenu() {
	  this.showModal = null;
  }

}
