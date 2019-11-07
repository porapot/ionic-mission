import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;

  constructor(private homeservice: HomeService) { }
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

}
