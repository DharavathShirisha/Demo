import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  constructor(private root:Router,private rooting:ActivatedRoute){
    console.log(this.rooting.snapshot.data['datas']);
  }
}
