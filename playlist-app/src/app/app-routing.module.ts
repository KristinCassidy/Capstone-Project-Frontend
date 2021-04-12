import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { CreateCollectionComponent } from './create-playlist/create-collection/create-collection.component';
import { AddCoreComponent } from './create-playlist/add-core/add-core.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { AddMoreMediaComponent } from './create-playlist/add-more-media/add-more-media.component';


const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent},
  { path: 'create-playlist', component: CreatePlaylistComponent, children: [
    { path: '', component: CreateCollectionComponent, pathMatch: 'full' },
    { path: 'core', component: AddCoreComponent},
  
    { path: 'add-more-media', component: AddMoreMediaComponent}
  ]},
  // { path: 'core', component: AddCoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
