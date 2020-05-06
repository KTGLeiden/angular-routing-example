import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input()
  public movie: Movie;

  @Output()
  public delete = new EventEmitter<Movie>();

  /** Emit a delete event */
  public onDeleteClick() {
    this.delete.emit(this.movie);
  }
}
