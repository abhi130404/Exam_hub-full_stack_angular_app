import { Component } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CoursesCardComponent } from '../courses-card/courses-card.component';
import { TestLoginPageComponent } from '../test_pages/test-login-page/test-login-page.component';
import { ProfileComponent } from '../profile/profile.component';
import { AdmissionPageComponent } from '../admission-page/admission-page.component';


@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [LoginPageComponent,RouterLink,RouterLinkActive,CoursesCardComponent,TestLoginPageComponent,ProfileComponent,AdmissionPageComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

}
