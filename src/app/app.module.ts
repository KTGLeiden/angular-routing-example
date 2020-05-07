import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieFormComponent,
    MovieComponent,
    MovieUpdateComponent,
    AdminComponent,
    LoginComponent,
    ConfirmationModalComponent,
    AddMovieComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
