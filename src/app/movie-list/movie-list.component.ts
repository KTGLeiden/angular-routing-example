import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../modals/confirmation-modal/confirmation-modal.component';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieService: MovieService, private readonly ngbModalService: NgbModal) {}

  ngOnInit(): void {
    const movies$ = this.movieService.getMovies();
    movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }

  public onDelete(movieToDelete: Movie) {
    const modal = this.ngbModalService.open(ConfirmationModalComponent);
    (modal.componentInstance as ConfirmationModalComponent).text = `Are you sure you want to delete movie ${movieToDelete.title} with id ${movieToDelete.id}?`;

    modal.result.then(
      () => {
        this.movieService.deleteMovie(movieToDelete).subscribe(() => {
          // Delete movie with id {movieToDelete.id}
          this.movies = this.movies.filter((movie) => movie.id !== movieToDelete.id);
        });
      },
      () => {
        // Rejected the operation.
      }
    );
  }

  public testMethod(): void {
    console.log('it worked!');
  }
}
