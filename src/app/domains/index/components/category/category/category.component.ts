import { Component, Input, input } from '@angular/core';
import { ImageComponent} from '../../../../shared/components/image/image.component';
@Component({
  selector: 'app-category',
  imports: [ImageComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
@Input({required:true}) name: string = '';
@Input({required:true}) image: string = '';
@Input({required:true}) href: string = '';
}
