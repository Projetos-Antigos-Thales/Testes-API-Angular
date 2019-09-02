import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://localhost:44349/api/Clients';

@Injectable({ providedIn: 'root' })
export class ClientsService {

    constructor(private http: HttpClient) { }

    /*listClients() {

        console.log(this.http);
        return this.http.get<Object[]>(API);*/

}


