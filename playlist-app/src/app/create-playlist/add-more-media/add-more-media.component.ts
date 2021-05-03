import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-more-media',
	templateUrl: './add-more-media.component.html',
	styleUrls: ['./add-more-media.component.css']
})
export class AddMoreMediaComponent implements OnInit {
	selected: boolean = false;
	state: string = "normal";
	coreImage: string;

	@Input() showModal: boolean = false;
	uploadType: string;

	constructor() { }

	ngOnInit(): void {
		
	}

	onSelected() {
		this.selected = !this.selected;
		}

	onModalMenu() {
		this.showModal = null;
	}

}
