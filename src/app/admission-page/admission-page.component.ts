import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PaymentPageComponent } from '../payment-page/payment-page.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admission-page',
  standalone: true,
  imports: [RouterLink,PaymentPageComponent,FormsModule,CommonModule],
  templateUrl: './admission-page.component.html',
  styleUrl: './admission-page.component.css'
})
export class AdmissionPageComponent {
  letterPattern: string = '^[a-zA-Z]+$';
  fname:string;
  lname:string;
  email:any;
  address:any;
  state:string; 
  postal_code:any;
  dob:any;
  phone:any;

  minDob: string;

  ngOnInit() {
    // Set the minimum date for Date of Birth (not future date)
    const today = new Date();
    this.minDob = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  }

  postal_number_length(){
    return this.postal_code ? this.postal_code.length<6:true;
  }
  postalNumberValid(): boolean {
    return this.postal_code ? /^[0-9]+$/.test(this.postal_code.toString()) : true;
  }

  isPhoneNumberValid(): boolean {
    return this.phone ? /^[0-9]+$/.test(this.phone.toString()) : true;
  }
  phone_number_length():boolean{
    return this.phone ? this.phone.length<10:true;
  }
  

  constructor(private service:ServiceService,private router:Router){ }
  admission_submit(){
    const myobj={
      user_id:this.service.getid(),
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      address:this.address,
      state:this.state,
      postal_code:this.postal_code,
      dob:this.dob,
      phone:this.phone,
   }

    this.service.setadmision_data(myobj);
    this.router.navigate(['/payment_page']);

  }

 

  

}
