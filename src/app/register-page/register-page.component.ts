import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, LoginPageComponent, HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  
    letterPattern: string = '^[a-zA-Z]+$';
    phoneNumberPattern: string = '^[0-9]+$';  // Define regex pattern for phone number
  
    first_name: any;
    last_name: any;
    email: any;
    phone_number: any;
    password: any;
    conform_password: any;
    visible: boolean = false;
  
  
    constructor(private http: HttpClient, public fb: FormBuilder, private router: Router) {}
  
    // Phone number validation method
    // Phone number validation method
isPhoneNumberValid(): boolean {
  return this.phone_number ? /^[0-9]+$/.test(this.phone_number.toString()) : true;
}
phone_number_length():boolean{
  return this.phone_number ? this.phone_number.length<10:true;
}



  
    register() {
     this.visible=true;
  
      console.log('Registering user with data:', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        phone_number: this.phone_number,
      });
  
      const userData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        phone_number: this.phone_number,
      };
  
      this.http.post('http://localhost:4000/api/register', userData).subscribe(
        (response) => {
          this.visible = false;
          console.log(' submuser registerd  successfully:', response);
          alert("User registered successfully!");
          this.first_name = "";
          this.last_name = "";
          this.email = "";
          this.password = "";
          this.conform_password = "";
          this.phone_number = undefined;
          this.router.navigate(['/login_page']);
        },
        (error) => {
          this.visible = false;
          console.error('Error during registration:', error);
          alert('There was an issue with the registration process. Please try again later.');
        }
      );
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
  