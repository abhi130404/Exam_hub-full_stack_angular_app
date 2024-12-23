import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../../service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResultPageComponent } from '../../result-page/result-page.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,ResultPageComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent {
 // Properties to store selected answers
 selectedAnswer1: string = '';
 selectedAnswer2: string = '';
 selectedAnswer3: string = '';
 selectedAnswer4: string = '';
 selectedAnswer5: string = '';
 marks:number=0;
 passorfail:string='';
 userid:number;

 // Flag to show answers after submission
 submitted: boolean = true;


 constructor(private service: ServiceService,private http: HttpClient,private router: Router){
  this.userid=this.service.getid();
  
}

i

 // Method to handle form submission
/* openModal() {
  this.modal.open();
}*/
 submit_exam() {

  
  
    if(this.selectedAnswer1=="Structural testing"){
      this.marks+=5;
}
if(this.selectedAnswer2=="32 and 64"){
this.marks+=5;
}
if(this.selectedAnswer3=="const"){
this.marks+=5;
}
if(this.selectedAnswer4=="Addbatch"){
this.marks+=5;
}
if(this.selectedAnswer5=="All"){
this.marks+=5;
}

if(this.marks>=15){
     this.passorfail="pass";
}
else{
this.passorfail="fail";
}

console.log(this.passorfail+" you got marks :"+this.marks);

console.log(this.userid);




const userdata = {
user_id: this.userid,
answer1: this.selectedAnswer1,
answer2: this.selectedAnswer2,
answer3: this.selectedAnswer3,
answer4: this.selectedAnswer4,
answer5: this.selectedAnswer5,
result: this.passorfail,
marks: this.marks
};

this.http.post('http://localhost:4000/api/test', userdata).subscribe(
(response) => {
console.log(userdata);
console.log('Exam submitted successfully:', response);
alert("Exam submitted successfully!");
this.displayStyle = "none";
this.router.navigate(['/score_page']); // Optional: redirect after submission
},
(error) => {
  this.displayStyle = "none";
console.error('Error during submission:', error);
alert('There was an issue with the registration process. Please try again later.');
}
);



this.marks=0;
  }

  @ViewChild('myModal') modal!: ResultPageComponent;


  displayStyle = "none"; 
  open_modal(){
    this.displayStyle = "block"; 
  }
  
  closePopup() { 
    this.displayStyle = "none"; 
  } 
  
}





