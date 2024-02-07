import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //propiedades
  nombre:string = 'Pablo';
  apellido:string = "";
  calificaciones:number = 8;
  encendido:boolean = true;

  personas:string[] = ['Eduardo','Daniel','Joe','Maria'];

  constructor(){}

  //metodo que cambia los valores de las propiedades

  cambiarValores(){
    this.nombre = "Pedro";
    this.calificaciones = 10;
    this.encendido = false;
  }
}
