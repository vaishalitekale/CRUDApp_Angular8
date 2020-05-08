import { Directive, ElementRef, Renderer, HostListener, HostBinding } from "@angular/core";


@Directive({
    selector: '[firstDir]'
})

export class FirstDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer) {
        // this.changeColor('red');
    }

    @HostBinding('style.border')border: string;
    @HostListener('click') click() {
        this.changeColor('red');
        this.border = 'solid 20px black';
    }

    @HostListener('mouseleave') mouseLeave() {
        this.changeColor('black');
        this.border = '';
    }

    changeColor(color: string) {
        console.log(color);
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'color', color);
    }
}