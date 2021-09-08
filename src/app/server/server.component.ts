import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {


  serverId = 121;
  serverStatus = "Online"
  isInUse = true;
  name= 'Root';

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentUserName() : string{
    return 'Bhavik Vashi';
  }

}
