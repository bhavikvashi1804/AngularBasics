import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-entry',
  templateUrl: './server-entry.component.html',
  styleUrls: ['./server-entry.component.css'],
})
export class ServerEntryComponent implements OnInit {
  serverName = '';
  serverContent = '';
  isCritical = false;

  @ViewChild('serverName')
  serverNameInput!: ElementRef;

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
      name: this.serverNameInput.nativeElement.value,
      content: this.serverContent,
      critical: this.isCritical,
    });
  }
}
