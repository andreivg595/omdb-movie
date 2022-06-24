import { Component, OnInit } from '@angular/core';
import { MovieData } from './model/movie-data.model';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: MovieData[] = [];

  totalRecords = 0;

  movieName!: string;

  columns: any[] = [
    { field: 'Title', header: 'Title' },
    { field: 'Year', header: 'Year' },
    { field: 'Poster', header: 'Poster' },
  ];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  onMovieNameEvent(movieName: string) {
    this.movieName = movieName;
    this.getMoviesByName(this.movieName);
  }

  getMoviesByName(movieName: string, page?: number): void {
    if (movieName !== undefined) {
      this.moviesService
        .getMoviesByName(movieName, page)
        .subscribe(
          (data: { Response: any; Search: MovieData[]; totalResults: any }) => {
            if (data.Response) {
              this.movies = data.Search;
              this.totalRecords = Number(data.totalResults);
            }
          }
        );
    }
  }

  onPageEvent(page: number): void {
    this.getMoviesByName(this.movieName, page);
  }
}
