import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private render: Renderer2) { }


  ngOnInit(): void {
    this.render.setStyle(
      this.elementRef.nativeElement, 
      'color',
      'blue',
    );
  }

  @HostListener('mouseenter') 
  mouseover(){
    this.render.setStyle(
      this.elementRef.nativeElement, 
      'color',
      'red',
    );
  }

  @HostListener('mouseleave') 
  mouseleave(){
    this.render.setStyle(
      this.elementRef.nativeElement, 
      'color',
      'blue',
    );
  }

}
