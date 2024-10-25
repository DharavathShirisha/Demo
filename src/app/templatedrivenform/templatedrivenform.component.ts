import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent {
  user = {
    name: '',
    email: ''
  };

  onSubmit() {
    console.log(this.user);
  }

}
