import { Component } from '@angular/core';
import { Login } from '../Modelo/Login';
import { NgForm } from '@angular/forms';
import {LoginService} from '../Service/login.service'
import { Router } from '@angular/router';
import {AppComponent} from '../app.component'
import { Usuario } from '../Modelo/Usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mostrarAlert:boolean = false;
  login!: Login;

  componentePrincipal!:AppComponent
 
  constructor(private service:LoginService, private router:Router ){
   
  }


    traerUsuario(id:string, password:string, area:string):void{
      localStorage.setItem("area",area);
      this.login=new Login(Number(id),password,area);
      if(isNaN(this.login.getUserName())){
        this.mostrarAlert=false;
        return;
      }
      
      console.log("Hola tu eres:" +  this.login.getUserName() + ", password: " + this.login.getPassword() + ", en el area: " + this.login.getArea());

      
        this.router.navigate(["homepage"])
      
    }
    
}
