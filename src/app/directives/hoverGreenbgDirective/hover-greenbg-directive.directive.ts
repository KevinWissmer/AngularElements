import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appHoverGreenbgDirective]'
})
export class HoverGreenbgDirectiveDirective implements OnInit {
    @Input() defaultColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = '#18361d';
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = this.defaultColor;
    }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

    constructor(private elementRef: ElementRef) { }

}
