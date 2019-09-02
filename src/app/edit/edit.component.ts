import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Client } from '../activehome/clients';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private http: HttpClient,private _Activatedroute: ActivatedRoute) { }

  
  ClientList = '';
  cc = '';


  cpf = '';
  nome = '';
  telefone = '';
  dataNasc = '';
  sexo = '';
  

  ngOnInit() {

    this.cpf=this._Activatedroute.snapshot.params['0'];

    this.GET_Client(this.cpf);

    

    // console.log(this.cpf);
  }

  clients: Client[] = [];

  private GET_Client(CPF) {    
    
    this.http
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

        console.log(this.ClientList);
        
        




      });

      
      
    }

    
}
