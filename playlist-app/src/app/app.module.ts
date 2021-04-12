import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateCollectionComponent } from './create-playlist/create-collection/create-collection.component';
import { AddCoreComponent } from './create-playlist/add-core/add-core.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';

import { AddMoreMediaComponent } from './create-playlist/add-more-media/add-more-media.component';
import { OverlayComponent } from './shared/overlay/overlay.component';
import { PlaylistService } from './shared/playlist.service';
import { TagFormComponent } from './create-playlist/create-collection/tag-form/tag-form.component';
import { TagService } from './create-playlist/create-collection/tag-form/tag.service';
import { AddItemComponent } from './create-playlist/add-item/add-item.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ PlaylistService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
