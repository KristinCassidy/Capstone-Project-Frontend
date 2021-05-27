import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { CreateCollectionComponent } from './create-playlist/create-collection/create-collection.component';
import { AddCoreComponent } from './create-playlist/add-core/add-core.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { AddMoreMediaComponent } from './create-playlist/add-more-media/add-more-media.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { AddQuoteComponent } from './shared/components/modal/add-quote/add-quote.component';
import { AddVideoComponent } from './shared/components/modal/add-video/add-video.component';
import { AddSongComponent } from './shared/components/modal/add-song/add-song.component';
import { AddImageComponent } from './shared/components/modal/add-image/add-image.component';
import { TagLibraryComponent } from './create-playlist/create-collection/tag-library/tag-library.component';
// import { ModalComponent } from './shared/components/modal/modal.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { PlaylistResolver } from './shared/services/resolvers/playlist-resolver.service';
import { TagsResolver } from './shared/services/resolvers/tags-resolver.service';
import { EditPlaylistComponent } from './edit-playlist/edit-playlist.component';
import { PlaylistsResolver } from './shared/services/resolvers/playlists-resolver.service';
// import { ImageResolver } from './shared/services/resolvers/image-resolver.service';


const routes: Routes = [
	{ path: '', redirectTo: '/splash', pathMatch: 'full' },
	{ path: 'splash', component: SplashComponent},
	{ path: 'create-playlist', component: CreatePlaylistComponent, children: [
		{ path: '', component: CreateCollectionComponent, pathMatch: 'full' },
		{ path: 'core', component: AddCoreComponent, children: [
			{ path: 'video', component: AddVideoComponent},
			{ path: 'quote', component: AddQuoteComponent },
			{ path: 'song', component: AddSongComponent},
			{ path: 'image', component: AddImageComponent}
		]},
		{ path: 'add-media', component: AddMoreMediaComponent},
		{ path: 'view', component: ViewPlaylistComponent}
	]},
	{ path: 'view-playlist', component: ViewPlaylistComponent},
	{ path: 'view-playlist/:id', component: ViewPlaylistComponent, resolve: {playlists: PlaylistsResolver}},
	{ path: 'view-playlist/:id/edit', component: EditPlaylistComponent, resolve: {playlist: PlaylistResolver}},

	{ path: 'tag-library', component: TagLibraryComponent, resolve: {tags: TagsResolver}}, 
	{ path: 'tag-library/:id', component: TagLibraryComponent, resolve: {tags: TagsResolver}},
	{ path: 'view-gallery', component: ViewGalleryComponent, pathMatch: 'full', resolve: {playlists: PlaylistsResolver}},
	
	{ path: '**', redirectTo: '/splash'}	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
