import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  
  serverCreationStatus = 'No server was created!';
  
  isDisabled = true;

  constructor() {
    setTimeout(()=>{
      this.isDisabled = false
    },2000);
  }

  ngOnInit(): void {}
}
