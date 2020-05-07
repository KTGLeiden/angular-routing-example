import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { LoginGuard } from './shared/services/login.guard';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/add', component: AddMovieComponent },
  { path: 'movies/edit/:id', component: MovieUpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
