import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss']
})
export class SingleFilmComponent {
  @Input() filmName: string = '';
  @Input('singleFilmName') filmNameSecondApproach: string = '';
  notstatus: string = 'viewed';
  status: string = 'not viewed';


  setStatus() {
    let tmp = this.status;
    this.status = this.notstatus;
    this.notstatus = tmp;
  }









}

