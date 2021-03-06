import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomTableColumn } from 'src/app/core/models/custom-table-column.model';
import { MovieData } from './models/movie-data.model';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnDestroy {
  movies: MovieData[] = [];

  totalRecords = 0;

  movieName = '';

  movieSelected: MovieData | undefined;

  movieDetail: MovieData | undefined;

  columns: CustomTableColumn[] = [
    { field: 'Title', header: 'Title' },
    { field: 'Year', header: 'Year' },
    { field: 'Poster', header: 'Poster' },
  ];

  subscription: Subscription = new Subscription();

  constructor(private moviesService: MoviesService) {}

  onMovieNameEvent(movieName: string): void {
    this.movieDetail = undefined;
    this.movieName = movieName;
    this.getMoviesByName(this.movieName);
  }

  onPageEvent(page: number): void {
    this.getMoviesByName(this.movieName, page);
  }

  onSelectedRowEvent(movie: MovieData): void {
    this.movieSelected = movie;
    this.getMovieByName(this.movieSelected.Title);
  }

  onUnselectedRowEvent(movie: MovieData): void {
    if (this.movieSelected === movie) {
      this.movieSelected = undefined;
      this.movieDetail = undefined;
    }
  }

  getMoviesByName(movieName: string, page?: number): void {
    this.subscription.add(
      this.moviesService
        .getMoviesByName(movieName, page)
        .subscribe(
          (data: {
            Response: string;
            Search: MovieData[];
            totalResults: string;
          }) => {
            if (data.Response === 'True') {
              this.movies = data.Search;
              this.totalRecords = Number(data.totalResults);
            } else if (data.Response === 'False') {
              this.movies = [];
            }
          }
        )
    );
  }

  getMovieByName(movieName: string): void {
    this.subscription.add(
      this.moviesService.getMovieByName(movieName).subscribe((data) => {
        this.movieDetail = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
