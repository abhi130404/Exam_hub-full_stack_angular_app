import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-conform-modal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './delete-conform-modal.component.html',
  styleUrl: './delete-conform-modal.component.css'
})
export class DeleteConformModalComponent {
  ngOnInit() {} 
  
  displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
}
