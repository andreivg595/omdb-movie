import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit, OnChanges {
  @Input() columns: any[] = [];

  @Input() movies: any[] = [];

  @Input() totalRecords: any;

  @Output() pageEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    /* if (changes['movies']) {
      console.log(this.movies)
    } */
  }

  onPageEvent(page: number): void {
    this.pageEvent.emit(page);
  }
}
