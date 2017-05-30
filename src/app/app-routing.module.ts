import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';

// services


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes/*,
      { preloadingStrategy: SelectivePreloadingStrategy }*/
    )
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
