import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId : number = 10;
  private serverStatus: string = 'offline';
  getServeerStatus(){
    return this.serverStatus;
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
