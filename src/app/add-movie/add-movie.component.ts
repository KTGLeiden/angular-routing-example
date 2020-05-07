import { Component } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent {
  constructor(private readonly movieService: MovieService) {}

  public addMovie(movie: Movie): void {
    this.movieService.addMovie(movie).subscribe((newMovie) => {
      alert(`We added a movie with id ${newMovie.id}!`);
    });
  }
}
