import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input()
  list: any = [];
  inputName: string = ""
  inputQty: number = 0

  constructor() {
    // this.list = [
    //   { id: 1, name: 'Pão', qty: 2, price: 0, basket: false },
    //   { id: 2, name: 'Manteiga', qty: 2, price: 0, basket: false },
    //   { id: 3, name: 'Fiambre', qty: 4, price: 0, basket: false },
    //   { id: 4, name: 'Queijo', qty: 7, price: 0, basket: false },
    //   { id: 5, name: 'Chouriço', qty: 4, price: 0, basket: false },
    //   { id: 6, name: 'Paio', qty: 3, price: 0, basket: false },
    //   { id: 7, name: 'Manteiga Amendoim', qty: 1, price: 0, basket: false },
    //   { id: 8, name: 'Queijo Fresco', qty: 1, price: 0, basket: false },
    //   { id: 9, name: 'Presunto', qty: 1, price: 0, basket: false },
    //   { id: 10, name: 'Nutella', qty: 1, price: 0, basket: false },
    // ]
    // this.save('list', this.list);
  }

  ngOnInit(): void { }

  toggleDone(id: number) {
    this.list.map((b: { basket: boolean; }, i: number) => {
      if (i == id) b.basket = !b.basket;

      return b;
    });
  }

  deleteProduct(id: number) {
    this.list = this.list.filter((b: any, i: number) => i !== id);
  }

  addProduct(item: any) {
    //this.cart.push(item)
    this.list = [...this.list, item]
    this.save('list', this.list)
    console.log(item)
  }

  save(name: string, data: any[]) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  load() {
    const list = localStorage.getItem('list');
    this.list = list ? JSON.parse(list) : this.list = [];
  }

  setItem(item: any, index: number) {
    const _lista = [...this.list];
    _lista[index] = item;
    this.list = _lista;
    if (item.delete) {
      this.list.splice(index, 1)
    }
    this.save('list', this.list);
  }
}


/*removeItem(index: number) {
   this.list.splice(index, 1)
   this.save('list', this.list)
 }

 addList(product: any) {
    this.list.push({
      content: this.inputList,
      basket: false
    })

 */
