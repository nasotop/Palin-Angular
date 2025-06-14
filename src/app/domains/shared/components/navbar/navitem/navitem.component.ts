import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navitem',
  imports: [],
  templateUrl: './navitem.component.html',
  styleUrl: './navitem.component.css'
})
export class NavitemComponent {
@Input({required:true}) label: string = '';
@Input() href: string = '';

}
