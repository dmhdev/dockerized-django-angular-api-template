import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass'],
  providers: [ApiService]
})

export class ItemsComponent {
  items = [{name: 'test'}];
  selectedItem;

  constructor(private api: ApiService) {
    this.getItems();
    this.selectedItem = {id:-1, name:'', desc:''};
  }
  
  getItems = () => {
    this.api.getAllItems().subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  itemClicked = (item) => {
    this.api.getOneItem(item.id).subscribe(
      data => {
        this.selectedItem = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  updateItem = () => {
    this.api.updateItem(this.selectedItem).subscribe(
      data => {
        this.getItems();
      },
      error => {
        console.log(error);
      }
    )
  }

  createItem = () => {
    this.api.createItem(this.selectedItem).subscribe(
      data => {
        //this.selectedItem = data;
        this.items.push(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteItem = () => {
    this.api.deleteItem(this.selectedItem.id).subscribe(
      data => {
        this.getItems();
        this.selectedItem = {id:-1, name:'', desc:''};
      },
      error => {
        console.log(error);
      }
    )
  }

}
