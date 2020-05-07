import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../shared/models/movie';

export class MovieForm extends FormGroup {
  constructor() {
    super({
      title: new FormControl('Star Wars', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      year: new FormControl(undefined, [
        Validators.required,
        Validators.min(1900),
        Validators.max(new Date().getFullYear()),
      ]),
      rating: new FormControl(undefined, [Validators.required, Validators.min(0), Validators.max(10)]),
    });
  }

  public getModel(): Movie {
    return {
      rating: this.value.rating,
      title: this.value.title,
      year: this.value.year,
    };
  }
}
