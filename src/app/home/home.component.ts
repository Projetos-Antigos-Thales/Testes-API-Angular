import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './clients';

import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
      .get<Client[]>('https://localhost:44349/api/Clients')
      .subscribe(clients => {

        this.ClientsList = clients;

      });

  }

  private DELETE(cpf: string) {
    alert('Certeza que quer deletar o cliente com CPF ' + (cpf) + ' ?');
  }

  private EDIT(cpf: string) {
    alert('Certeza que quer editar o cliente com CPF ' + (cpf) + ' ?');
  }












  
  public PegarValorDoComponente() {
    // const redirect = document.getElementById('txtCPF');
    // console.log(redirect);
  }

  public ColocarValorNoComponente() {
    // document.getElementById('').value = 'abc';
    // console.log('Conteudo alterado');
  }

}
