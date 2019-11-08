import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  OnDataChanged: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    this.OnDataChanged = new BehaviorSubject([]);
  }
  resolve(route: ActivatedRouteSnapshot) {
    this.getProductlistData();
    console.log(this.getProductlistData())
  }
  getProductlistData() {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/json/productlist.json').subscribe((res: any) => {
        this.OnDataChanged.next(res.data);
        resolve(res.data);
      }, reject)
    })
  }
}
