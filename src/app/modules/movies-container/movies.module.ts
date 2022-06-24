import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent
  ],
  imports: [
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
