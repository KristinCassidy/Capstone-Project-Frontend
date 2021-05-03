import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { CreateCollectionComponent } from './create-playlist/create-collection/create-collection.component';
import { AddCoreComponent } from './create-playlist/add-core/add-core.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { AddMoreMediaComponent } from './create-playlist/add-more-media/add-more-media.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { AddQuoteComponent } from './shared/modal/add-quote/add-quote.component';
import { AddVideoComponent } from './shared/modal/add-video/add-video.component';
import { AddSongComponent } from './shared/modal/add-song/add-song.component';
import { AddImageComponent } from './shared/modal/add-image/add-image.component';
import { TagLibraryComponent } from './create-playlist/create-collection/tag-library/tag-library.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { PlaylistResolver } from './shared/services/playlist-resolver.service';



const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent},
  { path: 'create-playlist', component: CreatePlaylistComponent, children: [
    { path: '', component: CreateCollectionComponent, pathMatch: 'full' },
    { path: 'core', component: AddCoreComponent, children: [
      { path: 'video', component: AddVideoComponent},
      { path: 'quote', component: AddQuoteComponent },
      { path: 'song', component: AddSongComponent},
      { path: 'image', component: AddImageComponent},
    ]},
    { path: 'add-media', component: AddMoreMediaComponent},
    { path: 'view', component: ViewPlaylistComponent}
  ]},
  { path: 'view-playlist', component: ViewPlaylistComponent},
  { path: 'tag-library', component: TagLibraryComponent},
  { path: 'view-gallery', component: ViewGalleryComponent},
  { path: 'view-playlist/:id', component: ViewPlaylistComponent, resolve: {playlist: PlaylistResolver} 
  },
  
  { path: '**', redirectTo: '/splash'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
