import { Component, OnInit } from '@angular/core';
import { Client } from './clients';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  private POST() {


    const cpf = document.getElementById('txtCPF').value;
    const nome = document.getElementById('txtNome').value;
    const telefone = document.getElementById('txtTelefone').value;
    const dataNasc = document.getElementById('txtData').value;
    const sexo = document.getElementById('txtSexo').value;
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Origin', '*');

    this.http
      .post('https://localhost:44349/api/Clients',
        JSON.stringify({
          'cpf': cpf,
          'nome': nome,
          'telefone': telefone,
          'dataNasc': dataNasc,
          'sexo': sexo,
          'atividade': 1
        }), { headers: headers })
      .subscribe(
        result => {

        },

        error => {

        });

        
        this.router.navigate(['/']);
        

  }

}
