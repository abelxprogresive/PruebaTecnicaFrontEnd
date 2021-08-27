import { CardUpdate } from './../../../models/card-update';
import { HttpClient } from '@angular/common/http';
import { CardService } from './../../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-find-card',
  templateUrl: './find-card.component.html',
  styleUrls: ['./find-card.component.css']
})
export class FindCardComponent implements OnInit {

  card: Card;
  id: string;
  cardForm: any;
  panPattern: string = '[A-Z]{5}[0-9]{4}[A-Z]{1}';
  //readonly: boolean = true;


  constructor(private cardService: CardService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {

      this.id =  this.activatedRoute.snapshot.paramMap.get('id');
      if(this.id){
        //cardform para editar
        this.cardForm=this.formBuilder.group({
          id: [{value:'',disabled:true}],
          name: [{value:'',disabled:true}],
          pan: [{value:'',disabled:true}],
          pin: [{value:'',disabled:false}],
          amount: [{value: '', disabled:true}],
        });
      }else{
        //crear
        this.cardForm=this.formBuilder.group({
          id: [{value:'',disabled:true}],
          name: [{value:'',disabled:false},Validators.required],
          pan: [{value:'',disabled:false},Validators.pattern(this.panPattern)],
          pin: [{value:'',disabled:false}],
          amount: [{value:0,disabled:true}],
          addbalance:  [{value:0,disabled:true}]
        });
      }

   }


  ngOnInit(): void {
    this.parameterExist();


  }

  parameterExist(){
    if(this.id){
      this.findCardById();
    }
  }

  findCardById(){
    console.log('id',this.id);
    if(this.id){
      this.cardService.getCard(this.id).subscribe(
        resp =>{
          this.card=resp;
          console.log('card',this.card);
         this.llenarFormulario();

        },error => {
          alert(error.message);
        }
      );

    }

  }

  llenarFormulario(){
    if(this.card){
      this.cardForm.controls.id.setValue(this.card.id);
      this.cardForm.controls.name.setValue(this.card.name);
      this.cardForm.controls.pan.setValue(this.card.pan);
      this.cardForm.controls.pin.setValue(this.card.pin);
      this.cardForm.controls.amount.setValue(this.card.amount);
      this.cardForm.controls.addbalance.setValue(0);
    }

  }

  save(){
    if(this.cardForm.invalid){

      return;
    }
    if(confirm("¿Desea guardar los datos de la tarjeta?")){
      // update
      const formValues= this.cardForm.value;
      if(this.id){
        this.card.amount = parseFloat(formValues.addbalance);
        this.card.pin = formValues.pin;


        this.cardService.updateCard(this.card).subscribe(
          resp =>{
            alert('Tarjeta Actualizada');
            this.card=resp;
            this.llenarFormulario();


          },error => {
            alert(error.message);
          }
        );
      }else{
        // create

        const card = new Card();
        card.name = formValues.name;
        card.pan = formValues.pan;
        card.pin = formValues.pin;
        this.cardService.createCard(card).subscribe(
          resp => {
            alert('Tarjeta Creada');
            this.router.navigate(['/list-cards']);
          }, error => {
            alert(error.error);
          }
        );
      }


  }
  }
}
