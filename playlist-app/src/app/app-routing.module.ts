import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';
import { AddCoreComponent } from './add-core/add-core.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';



const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent},
  { path: 'create-playlist', component: CreatePlaylistComponent, children: [
    { path: '', component: CreateCollectionComponent, pathMatch: 'full' },
    { path: 'core', component: AddCoreComponent}
  ]},
  // { path: 'core', component: AddCoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
