import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGreenbgDirective]'
})
export class GreenbgDirectiveDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  //Renderer2 ist better approach than directly change style because it doesn`t make Problems when no DOM is there.
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#18361d')
  }
}
