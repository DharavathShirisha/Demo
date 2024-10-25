import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-demopipescomponent',
  templateUrl: './demopipescomponent.component.html',
  styleUrls: ['./demopipescomponent.component.css']
})
export class DemopipescomponentComponent {

constructor(){
  this.product ={
    product_id:1,
    product_name:'Pen',
    product_description:"Its a Blue pen",
    product_mrp:15
    }
  this.products.push(this.product);

  this.product ={
    product_id:2,
    product_name:'Pencil',
    product_description:"Its Apsara pencil for good handwriting",
    product_mrp:5
    }
    this.products.push(this.product);  

    console.log(this.products);
}
product:Product={
  product_id:0,
  product_name:'',
  product_description:'',
  product_mrp:0
  }
products:Product[] =[];
dat:Date = new Date();
data:string= 'mphasis';
data1:string= '';
 amountInRupees: number = 0;
  conversionRate: number = 0.013; // Example conversion rate

  convertToUSD(amount: number): number {
    return amount * this.conversionRate;
  }

}

interface Product{
  product_id:number,
  product_name:string,
  product_description:string,
  product_mrp:number,

}

