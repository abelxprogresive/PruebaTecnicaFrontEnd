import { CardUpdate } from './../models/card-update';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor(private httpClient: HttpClient) { }


  getCard(id: any): Observable<Card> {
    return this.httpClient.get<Card>('https://localhost:5001/api/Card/'+id);
  }


  getListCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>('https://localhost:5001/api/Card');

  }

  updateCard(card: Card): Observable<Card>{
    return this.httpClient.put<Card>('https://localhost:5001/api/Card/'+card.id,card);
  }

  createCard(card: Card): Observable<Card>{
    return this.httpClient.post<Card>('https://localhost:5001/api/Card/',card);
  }


}
