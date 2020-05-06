import { Component, ViewChild } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MovieListComponent) movieListComponent: MovieListComponent;
  title = 'tutorial-routing';
}
