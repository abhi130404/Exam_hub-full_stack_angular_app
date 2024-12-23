import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdmisionReceiptComponent } from '../admision-receipt/admision-receipt.component';
import { ServiceService } from '../service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [AdmisionReceiptComponent,HttpClientModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent {
  myobj:any;
  id:number;
  constructor(private router:Router,private service:ServiceService,private http:HttpClient){
    
  }

  ngOnInit() {
    // Subscribe to the object observable to get the updated object
     this.service.getadmision_data().subscribe((data) => {
      this.myobj = data;
      console.log(data);
      
    });
    this.id = this.service.getid();

    
  }
  make_payment_button(){
  
    if(!this.id){
      alert("Please Login First !");
    }
  else{
  this.http.post('http://localhost:4000/api/admision_data', this.myobj).subscribe(
    (response) => {
    console.log(this.myobj);
    console.log('Admission successfully:', response);
    alert("Payment Successfully !");
    this.router.navigate(['/admision_receipt_page']); // Optional: redirect after submission
    },
    (error) => {
    console.error('Error during submission:', error);
    alert('There was an issue with the admision process. Please try again later.');
    }
    );
  }
}
}
