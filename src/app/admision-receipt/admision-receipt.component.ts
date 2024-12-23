import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admision-receipt',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './admision-receipt.component.html',
  styleUrls: ['./admision-receipt.component.css']
})
export class AdmisionReceiptComponent {
fname: any;
  lname: any;
  email: string;
  address: string;
  postal_code: string;
  dob: string;
  phone_number: number;
  admission_date: string;
  state:any;
  user_data: any;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.service.getadmision_data().subscribe((data) => {
      this.user_data = data;
      console.log('Data received in receipt page:', data);

      // Ensure all fields are set from the received data
      this.fname = data.fname;
      this.lname = data.Lname;
      this.email = data.email;
      this.address = data.address;
      this.state=data.state;
      this.postal_code = data.postal_code;
      this.dob = data.dob;
      this.phone_number = data.phone;
     // this.admission_date = data.admission_date;

     
    });
  }
}
