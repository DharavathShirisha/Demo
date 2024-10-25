import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumrandomService {
  data:any;
  constructor() { 
    this.data=Math.random();
  }
}
