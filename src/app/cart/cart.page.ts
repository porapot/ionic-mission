import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  data: any={};

  constructor(private cartservice: CartService) { }

  ngOnInit() {
    this.cartservice.OnDataChanged.subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    })
  }

}
