import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client'
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ClientService {

    private apiServerUrl = environment.apiBaseUrl

    constructor(private http: HttpClient){}

    public getClients(): Observable<Client[]> {
        return this.http.get<Client[]>(`${this.apiServerUrl}/clients`);
    }

    public addClient(client: Client): Observable<Client> {
        return this.http.post<Client>(`${this.apiServerUrl}/clients/create`, client);
    }
 
    public editClient(client: Client): Observable<Client> {
        return this.http.put<Client>(`${this.apiServerUrl}/clients/update/${client.id}`, client);
    }

    public deleteClient(clientId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/clients/delete/${clientId}`);
    }

}

