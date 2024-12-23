import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  id:number;
  private objectSubject = new BehaviorSubject<any>(null); 

  constructor() { }


  // Method to set the email
  setid(id: number) {
    this.id=id;  // Update the email value
  }

  // Method to get the current email
  getid(): number {
    return this.id;
  }

  setadmision_data(data:any){
  this.objectSubject.next(data);
  }
   
  getadmision_data(){
  return this.objectSubject.asObservable();
  }
  }

