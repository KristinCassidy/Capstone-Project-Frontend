import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageItem } from '../../models/playlist-item.model';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css'],
  host: {'class': 'mod-cont'}
})
export class AddImageComponent implements OnInit {
  menuHeader: string = 'Add Image:';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playlistService: PlaylistService) { }

  ngOnInit(): void {
  }

  onAddImage(form: NgForm) {
    const value = form.value;
    const image = new ImageItem(null, value.imagePath, value.name);
    this.playlistService.addCoreToPlaylist(image);
    console.log(image);
    this.router.navigate(['../../add-media'], {relativeTo: this.route});
  }

}