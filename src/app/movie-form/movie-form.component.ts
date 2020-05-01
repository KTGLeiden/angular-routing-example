import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit, OnDestroy {
  public movieTitle: string;
  public movieYear: number;
  public movieRating: number;

  public subscription: Subscription;

  constructor(private readonly movieService: MovieService) {}

  public addMovie(): void {
    const newMovie: Movie = {
      rating: this.movieRating,
      title: this.movieTitle,
      year: this.movieYear,
    };
    this.subscription = this.movieService
      .addMovie(newMovie)
      .subscribe((movie) => {
        alert(`We added a movie with id ${movie.id}!`);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
