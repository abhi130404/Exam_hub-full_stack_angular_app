import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterLink],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css'
})
export class UpdatePageComponent {
 letterPattern: string = '^[a-zA-Z]+$';
    phoneNumberPattern: string = '^[0-9]+$';  // Define regex pattern for phone number
  
    first_name: any;
    last_name: any;
    email: any;
    phone_number: any;
    password: any;
    conform_password: any;
    visible: boolean = false;
    id:any;
    loading:boolean;
    errorMessage:any;
    updated_form_data:any;
  location: any;
 
  
    constructor(private http: HttpClient, public fb: FormBuilder, private router: Router,private service:ServiceService) {}
  
    // Phone number validation method
    // Phone number validation method
isPhoneNumberValid(): boolean {
  return this.phone_number ? /^[0-9]+$/.test(this.phone_number.toString()) : true;
}
phone_number_length():boolean{
  return this.phone_number ? this.phone_number.length<10:true;
}

update_func(){
  this.visible=true;
      this.updated_form_data={
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        phone_number: this.phone_number,
      }

      this.http.put(`http://localhost:4000/api/update_data/${this.id}`, this.updated_form_data).subscribe(
        (response) => {
          this.visible=false;
          this.loading = false;
          console.log('User updated successfully !:', response);
          
          alert("User updated successfully !");
          
  
          this.location.back();  // Navigate back
  
        },
        (error) => {
          this.visible=false;
          this.loading=false;
          console.error('Error updating user:', error);
          alert("User not updated, Sorry! Try again.");
        }
      );


}
ngOnInit() {
  // Get the email from the service
  this.id = this.service.getid();

  // Check if email is valid before making the API request
  if (this.id) {
    // Make the HTTP request to fetch the profile data
    this.http.get(`http://localhost:4000/api/profile/${this.id}`).subscribe({
      next: (data: any) => {
        console.log('Profile Data:', data);
        this. first_name = data.first_name;
        this.last_name = data.last_name;
        this.phone_number=data.phone_number;
        this.email=data.email;
        this.password=data.password;
        this.loading = false;  // Stop loading after data is fetched
      },
      error: (err) => {
        console.error('Error fetching profile:', err);
        this.errorMessage = 'Failed to fetch profile. Please try again later.';
        this.loading = false;  // Stop loading even if there is an error
      }
    });
  } else {
    this.errorMessage = 'No email found. Please log in.';
    this.loading = false;
  }
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
