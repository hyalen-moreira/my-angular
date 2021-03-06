import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color = "lightblue";

  constructor(private element : ElementRef) { }

  @HostListener("mouseenter") addHighlight() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener("mouseleave") removeHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
