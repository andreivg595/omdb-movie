import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrimengModule } from './primeng.module';

import { FormMovieComponent } from './components/form-movie/form-movie.component';


@NgModule({
  declarations: [
    FormMovieComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    PrimengModule
  ], 
  exports: [
    ReactiveFormsModule,
    PrimengModule,
    FormMovieComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
        ngModule: SharedModule,
        providers: []
    };
  }
}