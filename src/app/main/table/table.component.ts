import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  tableHeader = [
    'Product name',
    'Color',
    'Category',
    'Accesories',
    'Available',
    'Price',
    'Weight',
    'Action',
  ];
  tableData = [
    {
      productName: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      accesories: 'Yes',
      available: 'Yes',
      price: '$2999',
      weight: '3.0 lb.',
      action: '',
      edit: false,
      isCheck: false,
    },
    {
      productName: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      accesories: 'No',
      available: 'Yes',
      price: '$1999',
      weight: '1.0 lb.',
      action: '',
      edit: false,
      isCheck: false,
    },
    {
      productName: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories	',
      accesories: 'Yes',
      available: 'No',
      price: '$99',
      weight: '0.3 lb.',
      action: '',
      edit: false,
      isCheck: false,
    },
    {
      productName: 'Apple Watch',
      color: 'Black',
      category: 'Watches',
      accesories: 'Yes',
      available: 'No',
      price: '$199',
      weight: '0.2 lb.',
      action: '',
      edit: false,
      isCheck: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  edit(item: any) {
    item.edit = !item.edit;
  }

  allCheck() {
    this.tableData.forEach((x) => {
      x.isCheck = !x.isCheck;
    });
  }
}
