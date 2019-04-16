import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductTableComponent } from './productTable/productTable.component';
import { UpdateProductComponent } from './updateProduct/updateProduct.component';
import { ProductComponent } from './Model-Component/Product/Product.component';
import { TransactionComponent } from './Model-Component/Transaction/Transaction.component';
import { AddTransactionComponent } from './AddTransaction/AddTransaction.component';
import { TransactionTableComponent } from './TransactionTable/TransactionTable.component';
import { AddProductComponent } from './Add-Product/Add-Product.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ProductTableComponent,
      UpdateProductComponent,
      ProductComponent,
      TransactionComponent,
      AddTransactionComponent,
      TransactionTableComponent,
      AddProductComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
