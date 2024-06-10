import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import { ProductDataService } from '../../services/product-data.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss',
})
export class SearchListComponent implements OnInit{
constructor(productList: ProductDataService,) {}
searchList = []

ngOnInit(): void {
  
}

}
