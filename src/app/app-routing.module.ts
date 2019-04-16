import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProductComponent } from "./updateProduct/updateProduct.component";
import { ProductTableComponent } from "./productTable/productTable.component";
import { OutageComponent } from "./Outage/Outage.component";
import { TransactionTableComponent } from './TransactionTable/TransactionTable.component';
import { AddTransactionComponent } from './AddTransaction/AddTransaction.component';

const routes: Routes = [
  {path: "update", component:UpdateProductComponent },
  { path: "list", component: ProductTableComponent},
  { path: "showtransations", component: TransactionTableComponent},
  { path: "outage", component: OutageComponent},
  { path: "addtransation", component: AddTransactionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
