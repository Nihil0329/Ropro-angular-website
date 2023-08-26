import { ProductService } from './../../services/product/product.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
    this.ProductService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.ProductService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.ProductService.removeCartItem(item);
    this.grandTotal -= item.price;
  }
  emptycart(){
    this.ProductService.removeAllCart();
  }

} {

}
