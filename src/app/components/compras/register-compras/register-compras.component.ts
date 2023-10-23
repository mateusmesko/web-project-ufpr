import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Compras } from 'src/app/shared/models/compras.model';
import { Router } from '@angular/router';
import { ComprasService } from '../services/compras.service';

@Component({
  selector: 'app-register-compras',
  templateUrl: './register-compras.component.html',
  styleUrls: ['./register-compras.component.css']
})
export class RegisterComprasComponent {

  @ViewChild('formCompras') formCompras!: NgForm;
  compras!: Compras;

  constructor(
    private comprasService: ComprasService,
    private router: Router
  ) { }



  inserirCompras(): void {
    if (this.formCompras.form.valid) {
      this.comprasService.inserirProdutos(this.compras);
      this.router.navigate(["/compras"]);
    }

  }

  updateCompras(): void{
    if(this.formCompras.form.valid){
      if(this.compras.idCompras){
        this.comprasService.inserirProdutos(this.compras);
      } else {
        this.comprasService.inserirProdutos(this.compras);
      }
      this.router.navigate(['/compras'])
    }
  }
}
