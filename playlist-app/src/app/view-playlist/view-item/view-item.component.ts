import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlaylistItem } from 'src/app/shared/models/playlist-item.model';
import { PlaylistService } from 'src/app/shared/services/playlist.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  @Output() showModal: boolean;
  @Output() close = new EventEmitter<void>();
  @Input() image: string;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.openItem.subscribe(
      data => this.image = data
    )
    console.log(this.image)
  }

  onClose() {
    this.showModal = false;
    this.close.emit();

  }

}
