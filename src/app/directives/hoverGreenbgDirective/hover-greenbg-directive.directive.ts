import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appHoverGreenbgDirective]'
})
export class HoverGreenbgDirectiveDirective {
    @HostListener('mouseenter') mouseover(eventData:Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#18361d')
    }
    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    }
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
