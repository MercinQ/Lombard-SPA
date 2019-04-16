import { Component, OnInit, Output, Input } from '@angular/core';
import { ProductHistory } from '../Models/ProductHistory';

@Component({
  selector: 'app-Add-Product',
  templateUrl: './Add-Product.component.html',
  styleUrls: ['./Add-Product.component.css']
})
export class AddProductComponent {
  
  constructor() { }
  
  @Input() product: ProductHistory = <ProductHistory>{};
}
