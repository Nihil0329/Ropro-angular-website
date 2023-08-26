import { Injectable } from '@angular/core';
import { product } from 'src/app/shared/models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }

  getAll(): product[]{
    return [
      {
        id:1,
        price:209999,
        name:'Product 1',
        imageUrl:'/assets/img/display 1.jpg',
        description:"Lorem ipsum dolor sit amet"
      },
      {
        id:2,
        price:78900,
        name:'Product 2',
        imageUrl:'/assets/img/display 2.png',
        description:"Lorem ipsum dolor sit amet"

      },{
        id:3,
        price:19999,
        name:'Product 3',
        imageUrl:'/assets/img/display 3.png',
        description:"Lorem ipsum dolor sit amet"

      },{
        id:4,
        price:599999,
        name:'Product 4',
        imageUrl:'/assets/img/display 4.jpeg',
        description:"Lorem ipsum dolor sit amet"

      },{
        id:5,
        price:39000,
        name:'Service 1',
        imageUrl:'/assets/img/display 9.jpg',
        description:"Lorem ipsum dolor sit amet"

      },{
        id:6,
        price:289999,
        name:'Service 2',
        imageUrl:'/assets/img/display 10.png',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:7,
        price:48000,
        name:'Service 3',
        imageUrl:'/assets/img/display 11.jpg',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:8,
        price:699999,
        name:'Service 4',
        imageUrl:'/assets/img/display 12.jpg',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:9,
        price:129999,
        name:'Product 5',
        imageUrl:'/assets/img/display 5.jpg',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:10,
        price:390000,
        name:'Product 6',
        imageUrl:'/assets/img/display 6.jpg',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:11,
        price:64500,
        name:'Product 7',
        imageUrl:'/assets/img/display 7.jpeg',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:12,
        price:890000,
        name:'Product 8',
        imageUrl:'/assets/img/display 8.jpg',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:13,
        price:125999,
        name:'Service 5',
        imageUrl:'/assets/img/display 13.jpg',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:14,
        price:479999,
        name:'Service 6',
        imageUrl:'/assets/img/display 14.jpg',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:15,
        price:189999,
        name:'Service 7',
        imageUrl:'/assets/img/display 15.jpg',
        description:"Lorem ipsum dolor sit amet"

      },
      {
        id:16,
        price:30299 ,
        name:'Service 8',
        imageUrl:'/assets/img/display 16.jpg',
        description:"Lorem ipsum dolor sit amet"

      },
    ]
  }
   getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    const index = this.cartItemList.indexOf(product);
    this.cartItemList.splice(index, 1);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}

