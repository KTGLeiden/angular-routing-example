import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieForm } from './movie.form';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent {
  @Output()
  public save = new EventEmitter<Movie>();
  public readonly form: MovieForm = new MovieForm();

  public get isFormValid(): boolean {
    return this.form.valid;
  }

  public saveMovie(): void {
    if (this.form.valid) {
      this.save.emit(this.form.getModel());
    } else {
      alert('Form is not valid! Check the fields!');
    }
  }
}
