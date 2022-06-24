import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieData } from '../models/movie-data.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = 'dbd14abb';
  private url = `${environment.BASE_URL}?apikey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getMoviesByName(name: string, page?: number): Observable<Movie<MovieData>> {
    let url = `${this.url}&s=${name}&type=movie&plot=full`;
    url = page ? `${url}&page=${page}` : url;

    return this.http.get<Movie<MovieData>>(url);
  }

  getMovieByName(name: string): Observable<MovieData> {
    const url = `${this.url}&t=${name}`;

    return this.http.get<MovieData>(url);
  }
}
