import { Directive, HostBinding,  HostListener,  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @Input()
  defaultColor: string = 'transparent';

  @Input()
  hoverColor: string = 'cyan';

  @HostBinding('style.backgroundColor') 
  backgroundColorProp: string = this.defaultColor;

  constructor() { }


  @HostListener('mouseenter')
  onMouseEnter(){
    this.backgroundColorProp = this.hoverColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.backgroundColorProp = this.defaultColor;
  }


 

  


}
