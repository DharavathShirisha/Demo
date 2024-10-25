import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-descriptipon',
  templateUrl: './product-descriptipon.component.html',
  styleUrls: ['./product-descriptipon.component.css']
})
export class ProductDescriptiponComponent  implements OnInit{
product:any;
constructor(private route:ActivatedRoute){}
ngOnInit(): void {
  const id=+this.route.snapshot.paramMap.get('id')!;
  this.product={
    id,
    name:`product${id}`,
    description:`Detailed description for prodcut${id}`
  };
}

}
