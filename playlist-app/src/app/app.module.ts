import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { HeadbarComponent } from './shared/components/headbar/headbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CreateCollectionComponent } from './create-playlist/create-collection/create-collection.component';
import { AddCoreComponent } from './create-playlist/add-core/add-core.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';

import { AddMoreMediaComponent } from './create-playlist/add-more-media/add-more-media.component';
import { OverlayComponent } from './shared/components/overlay/overlay.component';
import { PlaylistService } from './shared/services/playlist.service';
import { TagFormComponent } from './create-playlist/create-collection/tag-form/tag-form.component';
import { TagService } from './shared/services/tag.service';
import { AddItemComponent } from './create-playlist/add-item/add-item.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { AddQuoteComponent } from './shared/components/modal/add-quote/add-quote.component';
import { AddVideoComponent } from './shared/components/modal/add-video/add-video.component';
import { AddImageComponent } from './shared/components/modal/add-image/add-image.component';
import { AddSongComponent } from './shared/components/modal/add-song/add-song.component';
import { TagLibraryComponent } from './create-playlist/create-collection/tag-library/tag-library.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { PlaylistPreviewComponent } from './view-gallery/playlist-preview/playlist-preview.component';
import { PlaylistResolver } from './shared/services/resolvers/playlist-resolver.service';
import { TagsResolver } from './shared/services/resolvers/tags-resolver.service';
import { EditPlaylistComponent } from './edit-playlist/edit-playlist.component';
import { PlaylistsResolver } from './shared/services/resolvers/playlists-resolver.service';
import { ItemFormComponent } from './create-playlist/create-collection/item-form/item-form.component';
// import { ImageResolver } from './shared/services/resolvers/image-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HeadbarComponent,
    SidebarComponent,
    CreateCollectionComponent,
    AddCoreComponent,
    CreatePlaylistComponent,
    AddMoreMediaComponent,
    OverlayComponent,
    TagFormComponent,
    AddItemComponent,
    ViewPlaylistComponent,
    ModalComponent,
    AddQuoteComponent,
    AddVideoComponent,
    AddImageComponent,
    AddSongComponent,
    TagLibraryComponent,
    ViewGalleryComponent,
    PlaylistPreviewComponent,
    EditPlaylistComponent,
    ItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    PlaylistService, 
    TagService, 
    PlaylistResolver,
    PlaylistsResolver, 
    TagsResolver,
    // ImageResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
