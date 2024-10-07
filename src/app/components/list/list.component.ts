import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  carList: string[] = ['tablet', 'cellphone'];
  items: string = '';

  AddItems() {
    this.carList.push(this.items);
  }
}
