import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent {
  constructor(private fb:FormBuilder, private root: ActivatedRoute){ }
  
}
  // console.log(this.root.snapshot.paramMap.get('url'));
  // console.log(this.root.snapshot.paramMap.get('status'));
 

