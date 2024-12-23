import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { ScorePageComponent } from '../score-page/score-page.component';

import { Router } from '@angular/router';



@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [FormsModule,CommonModule,ScorePageComponent],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css'
})
export class ResultPageComponent {
  @Input() title: string = '';
  isVisible: boolean = false;

 constructor(private router:Router){

 }

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  saveChanges() {
    // Add your custom save logic here
    this.router.navigate(['/score_page']);
    this.close();
  }

}
