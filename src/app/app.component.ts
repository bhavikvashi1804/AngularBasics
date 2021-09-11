import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements = [
    {
      'name': 'server 1',
      'type': 'normal',
      'content': 'server 1 info'
    },
    {
      'name': 'server 2',
      'type': 'critical',
      'content': 'server 2 info'
    }
  ];
}
