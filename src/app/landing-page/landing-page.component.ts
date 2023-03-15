import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  ngIfVisibility:boolean = false;
  switchValue:string = 'version_1';
  switchInputValue: number = 1;

  changeSwitch(){
    this.switchValue = `version_${this.switchInputValue}`
  }
}
