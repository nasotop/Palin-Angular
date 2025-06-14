import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent {
  @Input({ required: true }) src: string = '';
  @Input() alt: string = '';

  height = input<number>();
  width = input<number>();
  classList = input<string | string[]>();
}
