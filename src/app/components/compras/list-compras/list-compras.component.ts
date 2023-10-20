import { ComprasService } from './../services/compras.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Compras } from 'src/app/shared/models/compras.model';

import { ModalComprasComponent } from '../modal-compras/modal-compras.component';

@Component({
  selector: 'app-list-compras',
  templateUrl: './list-compras.component.html',
  styleUrls: ['./list-compras.component.css']
})
export class ListComprasComponent implements OnInit {
  compra: Compras[] = [];

  constructor(private comprasService: ComprasService,
    private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.compra = this.ListComprasComponent();

  }

  ListComprasComponent(): Compras[] {
    return this.comprasService.listarProdutos();
  };

  listarProdutos(): Compras[]{
    return [
      new Compras(1, "verde", "Abacate maduro"),
      new Compras(2, "Laranja", "laranja baia"),
      new Compras(3, "Coco", "Coco verde da Bahia"),

    ]
  }

    removeCompra($event: any, compras: Compras): void {
    $event.preventDefault();

    if (confirm(`Deseja realmente remover a compras? ${compras.idCompras}?`)) {
      this.comprasService.removerProduto(compras.idCompras!);
      this.compra = this.ListComprasComponent();
    }
    }

  abrirModalCompras(compra: Compras) {
    const modalRef = this.modalService.open(ModalComprasComponent);
    modalRef.componentInstance.compra = compra;
  }

}
