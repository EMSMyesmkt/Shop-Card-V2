import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() products: any[] = [];
  product: any = null
  @Output() addProduct = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
    this.newProduct()
  }

  newProduct() {
    this.product = {
      name: "",
      qty: 0,
      price: 0,
      basket: false,
    }
  }

  add(product: any) {
    this.addProduct.emit(product)
    this.newProduct();
  }
}
