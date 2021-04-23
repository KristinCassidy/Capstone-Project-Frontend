import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { QuoteItem }  from '../../../shared/playlist-item.model';
import { PlaylistService } from '../../playlist.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  menuHeader: string = 'Add Quote:';
  // private quoteAdded = new Subject<QuoteItem>();
  constructor(private playlistService: PlaylistService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const quote = new QuoteItem(null, value.quote, null);
    this.playlistService.addCoreToPlaylist(quote);
    this.playlistService.coreAdded.next(quote);
    this.router.navigate(['../../add-media'], {relativeTo: this.route});
    
    // this.quoteAdded.next(quote);
    console.log(quote);

  }

}
