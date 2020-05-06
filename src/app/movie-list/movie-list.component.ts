import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    const movies$ = this.movieService.getMovies();
    movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }

  public onDelete(movieToDelete: Movie) {
    if (confirm(`Are you sure you want to delete movie ${movieToDelete.title} with id ${movieToDelete.id}?`)) {
      this.movieService.deleteMovie(movieToDelete).subscribe(() => {
        // Delete movie with id {movieToDelete.id}
        this.movies = this.movies.filter((movie) => movie.id !== movieToDelete.id);
      });
    }
  }

  public testMethod(): void {
    console.log('it worked!');
  }
}
