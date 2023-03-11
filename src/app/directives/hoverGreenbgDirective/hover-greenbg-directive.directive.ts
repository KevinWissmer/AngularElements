import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHoverGreenbgDirective]'
})
export class HoverGreenbgDirectiveDirective {
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    @HostListener('mouseenter') mouseover(eventData:Event){
        this.backgroundColor = '#18361d';
    }
    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.backgroundColor = 'transparent';
    }
    constructor(private elementRef: ElementRef) { }

}
