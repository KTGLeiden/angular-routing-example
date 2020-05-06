import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieFormComponent, MovieComponent, MovieUpdateComponent, AdminComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
