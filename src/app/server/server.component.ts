import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {

  name = "";
  
  constructor() {}

  ngOnInit(): void {}

  submitData(event: Event){
    this.name = (<HTMLInputElement>event.target).value;
  }
}
