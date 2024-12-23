import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { versions } from 'process';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule,RouterLink,HttpClientModule,CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  constructor(private http:HttpClient){

  }
  password:any;
  emailorphone:any;
  password_visible:boolean=false;
  visible:boolean=false;
  forget_function(){
    this.visible=true;
    this.http.get(`http://localhost:4000/api/forgot_password/${this.emailorphone}`)
    .subscribe({
      next: (data: any) => {
        this.visible=false;
        console.log(data);
        this.password=data.password;
        this.password_visible=true;


      
        
        
  
      }, error: (err) => {this.visible=false;   alert(err);}
    });
  }
}
