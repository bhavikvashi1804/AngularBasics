import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      h2{
        color: cyan;
      }
    `,
    `h1{
        color: grey;
    }
    `
  ]
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
