import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { CestaItem } from 'src/app/model/CestaItem';
import { Producto } from 'src/app/model/Producto';
import { ProcesarPedidoService } from 'src/app/service/procesar-pedido.service';

@Component({
  selector: 'app-procesar-pedido',
  templateUrl: './procesar-pedido.component.html',
  styleUrls: ['./procesar-pedido.component.css'],
})
export class ProcesarPedidoComponent implements OnInit {
  categorias: Categoria[] = [];
  productos: Producto[] = [];
  idCategoriaSel: number = 0;
  cesta: CestaItem[] = [];

  constructor(private procesarPedidoService: ProcesarPedidoService) {}

  ngOnInit(): void {
    this.procesarPedidoService
      .categorias()
      .subscribe((c) => (this.categorias = c));
  }

  productosCategoria() {
    this.procesarPedidoService
      .productosCategorias(this.idCategoriaSel)
      .subscribe((p) => {this.productos = p;
        this.actualizarStocks();
      });
  }

  actualizarStocks(){
    this.productos.forEach(p=>{
      this.cesta.forEach(c => {
        // para cada producto de la categoria seleccionada
        // recorremos la cesta de la compa y si encontramos
        // el producto en la cesta, debemos actualizar el stock
        if(p.idProducto == c.producto.idProducto){
          p.stock = p.stock - c.unidades;
        }
      })
    })
  }

  agregarProductoCesta(producto: Producto) {
    if (producto.unidades <= producto.stock) {
      let item = new CestaItem();
      item.producto = producto;
      item.unidades = producto.unidades;
      //Actualizar stock
      producto.stock = producto.stock - producto.unidades;
      this.cesta?.push(item);
    } else {
      alert('No hay suficiente stock');
    }
  }

  eliminarProductoCesta(pos: number) {
    let item = this.cesta[pos];
    this.cesta.splice(pos, 1);
    // Localizamos el producto para actualizar su stock
    let producto = this.productos.find(p => p.idProducto == item.producto.idProducto);
    if (producto) {
      producto.stock = Number(producto.stock) + Number(item.unidades);
    } else {
      alert(`Producto con id ${item.producto.idProducto} no encontrado.`);
    }
  }
}
