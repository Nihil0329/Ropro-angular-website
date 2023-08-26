import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  public grandTotal !: number;
  public products : any = [];

  constructor(private ProductService:ProductService){

  }

  openModal(){
    const modelDiv =document.getElementById('modalId');
    if(modelDiv!= null){
      modelDiv.style.display='block';
    }
  }

  closeModal(){
    const modelDiv =document.getElementById('modalId');
    if(modelDiv!= null){
      modelDiv.style.display='none';
    }
  }
  ngOnInit(): void {
    this.ProductService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.ProductService.getTotalPrice();
    })
  }
}
