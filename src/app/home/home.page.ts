import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;

  constructor(
    private homeservice: HomeService,
    private route: Router
    ) { }
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay:true
  };
  ngOnInit() {
    this.homeservice.OnDataChanged.subscribe((res: any) => {
      this.data = res;
      console.log(res);
    });
  }
  clickMore(){
    this.route.navigate(['productlist']);
  }
}
