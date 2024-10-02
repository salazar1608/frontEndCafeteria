import { Component,ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { Usuario } from '../Modelo/Usuario';
@Component({
  selector: 'app-areatables',
  templateUrl: './areatables.component.html',
  styleUrls: ['./areatables.component.css']
})
export class AreatablesComponent {

  @ViewChild(LoginComponent) child: any;
  email:String = "";
  sucursal!:number;

  mostrarAlert:boolean=true;

  constructor(private router:Router){}

  ngOnInit(){
  }

  ngAfterViewInit() {
    this.mostrarAlert=this.child.mostrarAlert;
  }
  decirHola(){
    console.log("Hola mundo")
    this.router.navigate(["listar"])
  }
  cerrarSesion(){
    this.router.navigate(["login"]);
  }
  getPhone(){
    /*let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    this.sucursal = usuario? usuario.sucursal: 0;
    
    return this.sucursal;*/
    return "Administrador de todas las sucursales";
  }
  getEmail(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    this.email= usuario ? usuario.nombre : 'H';
  
    
    return this.email;
  }
}
