import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss']
})
export class SingleFilmComponent {
  @Input() filmName: string = '';
  @Input('singleFilmName') filmNameSecondApproach: string = '';

  @Output() viewStatus = new EventEmitter<string>();
  @Output('statuschange') viewStatusSecodnApproach = new EventEmitter<string>();

  notstatus: string = 'viewed';
  status: string = 'not viewed';


  setStatus() {
    let tmp = this.status;
    this.status = this.notstatus;
    this.notstatus = tmp;
    this.viewStatusSecodnApproach.emit(this.status);
  }









}

