import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnChanges {

  @Input() list!: any[]
  total = 0

  ngOnChanges() {
    console.log('#changes');
    this.total = this.list
      .filter(i => i.basket)
      .map(i => i.price * i.qty)
      .reduce((acc, val) => acc + val, 0);
  }
}
