import { Component, OnInit } from '@angular/core';
import { ProductlistService } from './productlist.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
  data: any;
  constructor(private porductlist: ProductlistService) { }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  ngOnInit() {
    this.porductlist.OnDataChanged.subscribe((res: any) => {
      this.data = res;
      console.log(res);
    });
  }

}
