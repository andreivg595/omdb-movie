import { Component, Input } from '@angular/core';
import { MovieData } from '../models/movie-data.model';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailComponent {
  @Input() movie: MovieData | undefined;
}
