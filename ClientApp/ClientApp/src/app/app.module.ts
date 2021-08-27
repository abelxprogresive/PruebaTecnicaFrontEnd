import { ListCardsComponent } from './components/Cards/list-cards/list-cards.component';
import { FindCardComponent } from './components/Cards/find-card/find-card.component';
import { UpdateCardPswComponent } from './components/Cards/update-card-psw/update-card-psw.component';

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


const routes:Routes=[
  {
    path: 'find-card/:id',
    component: FindCardComponent
  },
  {
    path: 'find-card',
    component: FindCardComponent
  },
  {
    path: 'list-cards',
    component: ListCardsComponent
  },
  {
  path: 'update-card-psw',
    component: UpdateCardPswComponent
  },
  {
    path: '**',
    component: ListCardsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListCardsComponent,
    FindCardComponent,
    UpdateCardPswComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
