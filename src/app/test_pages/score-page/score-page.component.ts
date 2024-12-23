import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-score-page',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink],
  templateUrl: './score-page.component.html',
  styleUrl: './score-page.component.css'
})
export class ScorePageComponent {
    user_id:number;
    data:any;
    marks1:number=0;
    marks2:number=0;
    marks3:number=0;
    marks4:number=0;
    marks5:number=0;

    passorfail:boolean;
    
    constructor(private http:HttpClient,private service:ServiceService){
      this.user_id=service.getid();
      console.log("user id in score",this.user_id);
    }
    
    ngOnInit() {
      this.http.get(`http://localhost:4000/api/search_result/${this.user_id}`)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.data=data;
      if(data.first_answer=="Structural testing"){
            this.marks1=5;
      }
      if(data.second_answer=="32 and 64"){
      this.marks2=5;
      }
      if(data.third_answer=="const"){
      this.marks3=5;
      }
      if(data.fourth_answer=="Addbatch"){
      this.marks4=5;
      }
      if(data.fifth_answer=="All"){
      this.marks5=5;
      }
      if(data.result=="pass"){
        this.passorfail=true;
      }
        
        
          
          
    
        }, error: (err) => {   alert(err);}
      });
    
    }
}
