import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomTableColumn } from 'src/app/core/models/custom-table-column.model';
import { MovieData } from '../models/movie-data.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() columns: CustomTableColumn[] = [];

  @Input() movies: MovieData[] = [];

  @Input() totalRecords = 0;

  @Output() pageEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output() selectedRowEvent: EventEmitter<MovieData> =
    new EventEmitter<MovieData>();

  @Output() unselectedRowEvent: EventEmitter<MovieData> =
    new EventEmitter<MovieData>();
}
