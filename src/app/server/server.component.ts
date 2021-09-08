import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  allowToAddNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowToAddNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
}
