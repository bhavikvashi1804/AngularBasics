import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef) { 
    // type must be ElemenetRef of the argument
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = 'green'; 
    this.elementRef.nativeElement.style.backgroundColor = 'cyan';
  }

}
