import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrimengModule } from './primeng.module';

import { FormMovieComponent } from './components/form-movie/form-movie.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';


@NgModule({
  declarations: [
    FormMovieComponent,
    CustomTableComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    PrimengModule
  ], 
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    FormMovieComponent,
    CustomTableComponent
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