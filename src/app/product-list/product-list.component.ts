import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Product } from '../productservices.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products=[
  {id:1,name:'product1',description:'descriptiom of the Product1',image:'baby.jpg'},
  {id:2,name:'product2',description:'descriptiom of the Product2',image:'baby.jpg'},
];
constructor(private router:Router){}
  viewProduct(id:number){
    this.router.navigate(['/product',id]);
  }
}

