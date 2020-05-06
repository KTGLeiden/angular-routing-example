import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit, OnDestroy {
  @Output()
  public save = new EventEmitter<Movie>();

  @Input()
  public movie: Movie;

  public movieTitle: string;
  public movieYear: number;
  public movieRating: number;

  public subscription: Subscription;

  constructor(private readonly movieService: MovieService) {}

  public saveMovie(): void {
    const newMovie: Movie = {
      rating: this.movieRating,
      title: this.movieTitle,
      year: this.movieYear,
    };

    // output
    this.save.emit(newMovie);

    // this.subscription = this.movieService.addMovie(newMovie).subscribe((movie) => {
    //   alert(`We added a movie with id ${movie.id}!`);
    // });
  }

  ngOnInit(): void {
    if (this.movie) {
      // Initialize form for update
      this.movieRating = this.movie.rating;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
