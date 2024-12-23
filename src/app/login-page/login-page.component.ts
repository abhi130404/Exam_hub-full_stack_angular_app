import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { RouterLink } from '@angular/router';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavigationBarComponent,RouterLink,RegisterPageComponent,HomePageComponent,FormsModule, HttpClientModule, ReactiveFormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email:any;
  password:any;
  
  databse_password:any;
  message:any;
  visible:boolean=false;

  
    constructor(private http: HttpClient,public fb:FormBuilder,public du:FormBuilder,private router: Router,private service: ServiceService) {
      
      
      
    }

  login_function(){
    console.log(this.email,this.password);
    this.visible=true;

   
    
      this.http.get(`http://localhost:4000/api/search_user/${this.email}`)
      .subscribe({
        next: (data: any) => {
          console.log(data);

         if(  this.password==data.password){
          this.visible=false;
          this.service.setid(data.user_id);
          console.log("user_id is goted in login =",data.user_id);
          this.router.navigate(['/']);
          
        
      
          
         }
         else{
          
          alert("Please enter correct email and password !");
          this.visible=false;
          this.email="";
          this.password="";
         }
        
          
          
    
        }, error: (err) => {  this.visible=false; alert("Failed to Login ! Please try again..");this.email="";this.password="";console.log("error form login :",err.error)}
      });
    
       // Access the input value
    }
  
//password visibility
eye_close:boolean=false;
passwordVisible: boolean = false; // To toggle password visibility
// Toggle password visibility
togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
  this.eye_close=!this.eye_close;
}


}
