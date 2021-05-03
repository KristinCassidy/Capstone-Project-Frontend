import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { QuoteItem }  from '../../models/playlist-item.model';
import { PlaylistService } from '../../services/playlist.service';
import { CreatePlaylistService } from 'src/app/shared/services/create-playlist.service';


@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css'],
  host: {'class': 'mod-cont'}
})
export class AddQuoteComponent implements OnInit {
  menuHeader: string = 'Add Quote:';
  // private quoteAdded = new Subject<QuoteItem>();
  constructor(private createPlaylistService: CreatePlaylistService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const quote = new QuoteItem(null, value.quote, value.name, null);
    this.createPlaylistService.addCoreToPlaylist(quote);
    this.createPlaylistService.coreAdded.next(quote);
    this.router.navigate(['../../add-media'], {relativeTo: this.route});
    
    // this.quoteAdded.next(quote);
    console.log(quote);

  }

}
