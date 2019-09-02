import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './clients';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clients Web Application';
  table = 'abc';
  ClientList = '';

  /*clients: Object[] = [];

  constructor(clientsService: ClientsService) {

    clientsService.listClients().subscribe(clients => this.clients = clients);

  }*/

  // tslint:disable-next-line: ban-types
  clients: Client[] = [];

  constructor(http: HttpClient) {

    http
      // tslint:disable-next-line: ban-types
      .get<Client[]>('https://localhost:44349/api/Clients')
      .subscribe(clients => {
        this.clients = clients;

        // tslint:disable-next-line: forin
        for (let i in this.clients) {

          // console.log(i +': '+ this.clients[i].cpf);
          this.ClientList += ' ||||| : ' + this.clients[i].id + ' - ' + this.clients[i].cpf + ' - ' + this.clients[i].nome +
            this.clients[i].telefone + ' - ' + this.clients[i].dataNasc + ' - ' +
            this.clients[i].sexo + ' - ' + this.clients[i].atividade;

        }







      });

  }





}

