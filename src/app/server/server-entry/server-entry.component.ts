import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server-entry',
  templateUrl: './server-entry.component.html',
  styleUrls: ['./server-entry.component.css'],
})
export class ServerEntryComponent implements OnInit {
  serverName = '';
  serverContent = '';
  isCritical = false;

  @Output('serverCreatedEmitter')
  serverCreated = new EventEmitter<{
    name: string;
    critical: boolean;
    content: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  addNewServer() {
    //console.log(this.serverName);
    //console.log(this.serverContent);
    //console.log(this.isCritical);
    this.serverCreated.emit({
      name: this.serverName,
      content: this.serverContent,
      critical: this.isCritical,
    });
  }
}
