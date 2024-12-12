import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {
  //elementRef allows us to access the native DOM element assoiciated with the directive
  private appHoverHighlight: string | undefined;
  constructor(private el: ElementRef) {}
  /*
  @HostListener('mouseenter'): This method is triggered when the mouse enters the element. It calls the highlight method, passing in
  either the color specified in appHoverHighlight or a default color of yellow if none is provided.
  @HostListener('mouseleave'): This method is triggered when the mouse leaves the element. It calls the highlight method with an
  empty string, effectively removing the background color.
   */
  @Input() appHoverDirective : string = '';
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight || 'orange'); //Default colour just incase
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
