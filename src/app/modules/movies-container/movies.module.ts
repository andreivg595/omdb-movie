import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    MoviesDetailComponent
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
