import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent {
  constructor(private fb:FormBuilder, private root: ActivatedRoute){ }
  
}
//  console.log(this.root.snapshot.paramMap.get('url'));
//  console.log(this.root.snapshot.paramMap.get('status'));
 