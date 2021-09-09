import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverCreationStatus = 'No server was created!';

  show = true;

  constructor() {}

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
}
