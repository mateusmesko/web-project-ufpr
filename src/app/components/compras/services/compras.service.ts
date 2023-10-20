import { Compras } from './../../../shared/models/compras.model';
import { Injectable } from '@angular/core';

import { Product } from 'src/app/shared/models/products.model';

const LS_CHAVE: string = "compras";

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor() { }

  listarProdutos(): Compras[]{
    const produtos = localStorage[LS_CHAVE];
    return produtos ? JSON.parse(produtos) : [];
}

  inserirProdutos(comprasProdutos: Compras): void {
    //Código aqui
  }

  buscarProdutoPorId(id : number): Compras | undefined {
    const compras: Compras[] = this.listarProdutos();
    return compras.find(compras => compras.idCompras === id)
  }

  autualizarProdutos(compra: Compras): void {

    const compras: Compras[] = this.listarProdutos();
    compras.forEach( (obj,index, objs) =>  {

      /*if(compra.idCompras === obj.idCompras) {
      objs[index] = compras
      }*/
    });

    localStorage[LS_CHAVE] = JSON.stringify(compras);
  }

  removerProduto(id: number): void {
    let compras: Compras[] = this.listarProdutos();
    compras = compras.filter(compras => compras.idCompras !== id);
    localStorage[LS_CHAVE] = JSON.stringify(compras);
  }

}

