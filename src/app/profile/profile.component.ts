import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdatePageComponent } from '../update-page/update-page.component';
import { Router } from '@angular/router';
import { DeleteConformModalComponent } from '../delete_profile_folder/delete-conform-modal/delete-conform-modal.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule,RouterLink,UpdatePageComponent,DeleteConformModalComponent,ProfileComponent

  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  id:number;
  email: any;
  first_name: any;
  last_name: any;
  phone_number:any;
  loading: boolean = true;  // To handle loading state
  errorMessage: string = ''; // To handle errors

  constructor(private service: ServiceService, private http: HttpClient,private router:Router) {}

  ngOnInit() {
    // Get the email from the service
    this.id = this.service.getid();

    // Check if email is valid before making the API request
    if (this.id) {
      // Make the HTTP request to fetch the profile data
      this.http.get(`http://localhost:4000/api/profile/${this.id}`).subscribe({
        next: (data: any) => {
          console.log('Profile Data:', data);
          this.first_name = data.first_name;
          this.last_name = data.last_name;
          this.phone_number=data.phone_number;
          this.email=data.email;
          this.loading = false;  // Stop loading after data is fetched
        },
        error: (err) => {
          console.error('Error fetching profile:', err);
          this.errorMessage = 'Failed to fetch profile. Please try again later.';
          this.loading = false;  // Stop loading even if there is an error
        }
      });
    } else {
      this.errorMessage = 'No profile found. Please log in.';
      this.loading = false;
    }
  }

  logout(){
    this.service.setid(undefined);
   
      alert("Log Out successfully !");
      this.router.navigate(['/']);
    
  }

  delete_profile() {
    const url = `http://localhost:4000/api/delete/${this.id}`;  // API endpoint
    
    // Make DELETE request to backend
    this.http.delete(url).subscribe(
      (response) => {
        console.log('User deleted:', response);
        alert('User deleted successfully');
        this.displayStyle = "none"; 
        this.router.navigate([this.router.url]); 
  
        // Navigate to a confirmation page (uncomment if needed)
        // Navigate to another page
      },
      (error) => {
        this.displayStyle = "none";
        console.error('Error deleting user:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
  
        // Handle specific error messages or status codes
        if (error.status === 404) {
          alert('User not found. Deletion failed.');
        } else if (error.status === 500) {
          alert('Server error. Please try again later.');
        } else {
          alert(`Error deleting user: ${error.message}`);
        }
      }
    );
  }
  

  displayStyle = "none"; 
  open_modal(){
    this.displayStyle = "block"; 
  }
  
  closePopup() { 
    this.displayStyle = "none"; 
  } 
}
