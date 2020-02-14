import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  registro = {
    name: "",
    passwd: "",
    rol: ''

  }
  rol =[{
    adm: "Administrador",
    vent: "Ventas",
    usr: "Usuario",
  }]

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor", forma.value);
  }

}
