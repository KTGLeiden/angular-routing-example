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
  constructor(private readonly http: HttpClient) {}

  /**
   * Adds a movie to the array
   */
  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:8080/api/movies', movie);
  }

  /**
   * Returns all the movies.
   */
  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8080/api/movies');
  }
}
