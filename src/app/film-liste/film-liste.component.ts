import { Component } from '@angular/core';

@Component({
  selector: 'app-film-liste',
  templateUrl: './film-liste.component.html',
  styleUrls: ['./film-liste.component.scss']
})
export class FilmListeComponent {
  filmlist: string[] = ["Avatar","LOTR","Superman"]; 
}
