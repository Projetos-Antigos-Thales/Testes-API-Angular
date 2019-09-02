import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './clients';

import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient, private router: Router) { }
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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private DELETE(cpf: string) {

    try{
      var answer = window.confirm("Are you sure you want to DELETE this Client ?")
      if (answer) {
        this.http.delete('https://localhost:44349/api/Clients/del/' + cpf)
          .subscribe(clients => { }); location.reload();
      } else { }
    }catch{

    }    
    
  }

  private EDIT(cpf: string) {

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
