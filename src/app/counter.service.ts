import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countermessage } from './countermessage';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  apiURL: string = 'http://localhost:4567';

  constructor(private httpClient: HttpClient) {}

  getCurrentCounter() {
    return this.httpClient.get<Countermessage>(`${this.apiURL}/currentcounter`);
  }

  raiseCounter() {
    return this.httpClient.post<Countermessage>(`${this.apiURL}/pluseen`, null);
  }

}
