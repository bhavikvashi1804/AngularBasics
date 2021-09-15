import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private render: Renderer2) { }


  ngOnInit(): void {
    this.backgroundColorProp = 'cyan';
  }

  @HostBinding('style.backgroundColor') 
  backgroundColorProp!: string;


}
