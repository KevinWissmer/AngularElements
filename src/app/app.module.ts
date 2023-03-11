import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GreenbgDirectiveDirective } from './directives/greenbgDirective/greenbg-directive.directive';
import { HoverGreenbgDirectiveDirective } from './directives/hoverGreenbgDirective/hover-greenbg-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GreenbgDirectiveDirective,
    HoverGreenbgDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
