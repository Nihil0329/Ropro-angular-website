import { product } from './../../shared/models/product';
import { ProductService} from './../../services/product/product.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  product: product[]= [];
  term: any;
  p:number=1;
  constructor(private ProductService:ProductService, private route:ActivatedRoute){

  }
  ngOnInit(): void{
    this.route.params.subscribe(params =>{
      if(params['searchTerm'])
      this.product=this.ProductService.getAll().filter(products =>
        products.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else
        this.product=this.ProductService.getAll();
      })
    this.product=this.ProductService.getAll();
  }
  addtocart(item: any){
    this.ProductService.addtoCart(item);
  }
}
