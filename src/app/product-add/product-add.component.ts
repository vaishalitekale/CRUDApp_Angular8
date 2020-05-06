import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import { ProductService } from '../products.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;  
  constructor(private fb: FormBuilder, private productService: ProductService) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      ProductName: ['', Validators.required ],  
      ProductDescription: ['', Validators.required ],  
      ProductPrice: ['', Validators.required ]  
    });  
  }
  ngOnInit() {
  }

  addProduct(ProductName, ProductDescription, ProductPrice) {  
    this.productService.addProduct(ProductName, ProductDescription, ProductPrice);  
  }  

}
