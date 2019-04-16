import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Models/Transaction';
import { ProductHistory } from '../Models/ProductHistory';

@Component({
  selector: 'app-AddTransaction',
  templateUrl: './AddTransaction.component.html',
  styleUrls: ['./AddTransaction.component.css']
})

export class AddTransactionComponent implements OnInit{
  productHistory : ProductHistory=  <ProductHistory>{};
  transaction : Transaction = <Transaction>{};
  constructor() { }

  ngOnInit()
  {
    this.transaction.transactionType = 1;
    this.transaction.productHistory = 
    [
      {
        name : "fsdfd",
        quantity : 0,
        price :  0

      },
      {
        name : "fsdsfsdfdfd",
        quantity : 0,
        price :  0

      },
    ]
  }
  AddProduct()
  {
    this.transaction.productHistory.push(this.productHistory);
    console.log(this.transaction);

    this.productHistory = <ProductHistory>{};
  }
}
