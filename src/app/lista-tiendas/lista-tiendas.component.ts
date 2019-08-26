import { Component, OnInit } from '@angular/core';


export class Tienda{

  constructor(
    public id: number, 
    public nombre: string,
    public ubicacion: string,
    public done: boolean, 
    public targetDate: Date,
    public username:string
  ){

  }
}

@Component({
  selector: 'app-lista-tiendas',
  templateUrl: './lista-tiendas.component.html',
  styleUrls: ['./lista-tiendas.component.css']
})



export class ListaTiendasComponent implements OnInit {


  constructor( ) { }

  ngOnInit() {
  }

}
