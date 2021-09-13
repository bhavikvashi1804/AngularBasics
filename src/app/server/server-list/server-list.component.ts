import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit, AfterContentInit  {

  @Input('serverData')
  serverElement!: {
    name: string,
    critical: boolean,
    content: string
  };

  @ContentChild('myPara')
  paragraphElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.paragraphElement.nativeElement);
  }

  ngAfterContentInit(){
    console.log(this.paragraphElement.nativeElement);
  }

}
