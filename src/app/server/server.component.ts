import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  
  serverElements = [
    {
      name: 'server 1',
      type: 'normal',
      content: 'server 1 info',
    },
    {
      name: 'server 2',
      type: 'critical',
      content: 'server 2 info',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
