import { Component } from '@angular/core';

@Component({
  selector: 'app-film-liste',
  templateUrl: './film-liste.component.html',
  styleUrls: ['./film-liste.component.scss']
})
export class FilmListeComponent {
  filmlist: string[] = ["Avatar","LOTR","Superman"]; 
  stati: string[] = ["not viewed","not viewed","not viewed"];

  changeStatus(index:number, status:string){
    this.stati[index] = status;
    
  }
}
