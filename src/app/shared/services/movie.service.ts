import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

/**
 * Movie service that keeps track of a list of movies
 */
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/movies`;

  constructor(private readonly http: HttpClient) {}

  /**
   * Adds a movie to the array
   */
  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }

  /**
   * Returns all the movies.
   */
  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
}
