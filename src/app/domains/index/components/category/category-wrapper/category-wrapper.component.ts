import { Component, input } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-category-wrapper',
  imports: [CategoryComponent],
  templateUrl: './category-wrapper.component.html',
  styleUrl: './category-wrapper.component.css'
})
export class CategoryWrapperComponent {
categories = input.required<Category[]>();
}
