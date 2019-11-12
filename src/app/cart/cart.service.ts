import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  OnDataChanged: BehaviorSubject<any[]>;

  constructor(private http: HttpClient) {
    this.OnDataChanged = new BehaviorSubject([]);
  }

  resolve() {
    this.getCartData();
  }
  getCartData() {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/json/cart.json').subscribe((res: any) => {
        this.OnDataChanged.next(res.data);
        resolve(res.data);
      }, reject)
    })
  }
}
