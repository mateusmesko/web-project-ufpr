import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/models/products.model';
import { ProductsService } from '../../product/service/product.service';


@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit{
  products: Product[] = []

  constructor(private productService : ProductsService){}
  ngOnInit():void{
    this.products = this.listAll();
  }
  
  listAll():Product[] {
    return this.productService.listAll()
  }
  
  remove($event: any, product: Product): void {
    $event.preventDefault();

    if (confirm(`Deseja realmente remover o cadastro com nome ${product.descrition}?`)) {
      this.productService.remove(product.id!);
      this.products = this.listAll();
    }
  }
}
