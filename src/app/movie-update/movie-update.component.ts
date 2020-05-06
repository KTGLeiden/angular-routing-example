import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css'],
})
export class MovieUpdateComponent implements OnInit {
  public movieTitle: string;
  public movieYear: number;
  public movieRating: number;

  public movieId: number;

  constructor(private readonly movieService: MovieService, private readonly activatedRoute: ActivatedRoute) {}

  public updateMovie(): void {
    const newMovie: Movie = {
      rating: this.movieRating,
      title: this.movieTitle,
      year: this.movieYear,
      id: this.movieId,
    };
    this.movieService.updateMovie(newMovie).subscribe(() => {
      alert(`We update a movie with id ${this.movieId}!`);
    });
  }

  ngOnInit(): void {
    this.movieId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    // Get the movie details from the server and prefill the form
    this.movieService.getMovie(this.movieId).subscribe(
      (movie) => {
        // Prefill the form
        this.movieYear = movie.year;
        this.movieRating = movie.rating;
        this.movieTitle = movie.title;
      },
      (error) => {
        alert(`we couldn't find the movie you are looking for! The error is: ${error}`);
      }
    );
  }
}
