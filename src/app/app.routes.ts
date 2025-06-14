import { Routes } from '@angular/router';
import { IndexComponent } from './domains/index/pages/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'categories/:category',
    loadComponent: ()=> import('./domains/categories/category/category.component').then(m => m.CategoryComponent)
  }
];
