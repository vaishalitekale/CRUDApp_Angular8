import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from '../app/product-add/product-add.component';
import { ProductEditComponent } from '../app/product-edit/product-edit.component';
import { ProductGetComponent } from '../app/product-get/product-get.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';


const routes: Routes = [
  {
    path: 'product/create',
    component: ProductAddComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'products',
    component: ProductGetComponent
  },
  {
    path: 'pipes',
    component: PipeExampleComponent
  },
  {
    path: 'directive',
    component: DirectiveExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
