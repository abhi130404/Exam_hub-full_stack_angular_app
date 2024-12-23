import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TestPageComponent } from '../question_paper_page/test-page/test-page.component';
import { ServiceService } from '../../service.service';
import { NavigationBarComponent } from '../../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-test-login-page',
  standalone: true,
  imports: [RouterLink,TestPageComponent,NavigationBarComponent],
  templateUrl: './test-login-page.component.html',
  styleUrl: './test-login-page.component.css'
})
export class TestLoginPageComponent {
  userid:number;

  constructor(private service: ServiceService,private router: Router){
    this.userid=service.getid();
  }

  open_exam(){
    if(this.userid==undefined){
        
      alert("Please Login to attempt exam !");
}  else{
  this.router.navigate(['/test_home_page']);
}
  }


}
