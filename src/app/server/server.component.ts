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
      critical: false,
      content: 'server 1 info',
    },
    {
      name: 'server 2',
      critical: true,
      content: 'server 2 info',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onServerAdded(data: {
    name: string,
    critical: boolean,
    content: string
  }){
    this.serverElements.push({
      name: data.name,
      critical: data.critical,
      content: data.content
    });
  }
}
