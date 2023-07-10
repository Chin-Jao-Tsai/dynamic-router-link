import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // @Input() color: string = '';
  // @Output() mouseEnter = new EventEmitter();

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
    // this.highlight(this.color);
    // this.mouseEnter.emit(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    // this.mouseEnter.emit(false);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}