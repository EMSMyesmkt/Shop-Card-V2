import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: any = null;
  @Output() result = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  updatePrice() {
    this.item.basket = true
    this.result.emit(this.item);
  }

  removeBasket() {
    if (this.item.qty) {
      this.item.basket = !this.item.basket;
      this.result.emit(this.item);
    }
  }

  removeFromList() {
    this.item.delete = true
    this.result.emit(this.item)
  }

}
