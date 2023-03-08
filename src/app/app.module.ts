import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FilmListeComponent } from './film-liste/film-liste.component';
import { SingleFilmComponent } from './single-film/single-film.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FilmListeComponent,
    SingleFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
