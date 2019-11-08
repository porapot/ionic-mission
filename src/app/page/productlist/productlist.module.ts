import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductlistPage } from './productlist.page';
import { ProductlistService } from './productlist.service';

const routes: Routes = [
  {
    path: '',
    component: ProductlistPage,
    resolve: {
      productlists: ProductlistService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductlistPage]
})
export class ProductlistPageModule { }
