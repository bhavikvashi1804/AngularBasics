import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-entry',
  templateUrl: './server-entry.component.html',
  styleUrls: ['./server-entry.component.css']
})
export class ServerEntryComponent implements OnInit {

  serverName = "";
  serverContent = "";

  constructor() { }

  ngOnInit(): void {
  }

  addNewServer(){
    console.log(this.serverName);
    console.log(this.serverContent);
  }

}
