import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './clients';

@Component({
  selector: 'app-activehome',
  templateUrl: './activehome.component.html',
  styleUrls: ['./activehome.component.css']
})
export class ActiveHomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ClientsList: Client[] = [];
  AllClients = '';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.GET();
  }


  private GET() {
    const redirect = document.getElementById('redirect');
    this.http
      // tslint:disable-next-line: ban-types
      .get<Client[]>('https://localhost:44349/api/Clients/actives')
      .subscribe(clients => {

        this.ClientsList = clients;

      });

  }

}
