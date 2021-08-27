import { CardService } from './../../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  list: Card[];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.cardService.getListCards().subscribe(
      resp =>{
        this.list=resp;
      },error => {
        alert(error.message);
      }
    );
  }

  downloadFile(){
    window.open('https://localhost:5001/api/Card/action/download');

  }



}
