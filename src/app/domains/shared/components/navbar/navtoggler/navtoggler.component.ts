import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navtoggler',
  imports: [],
  templateUrl: './navtoggler.component.html',
  styleUrl: './navtoggler.component.css'
})
export class NavtogglerComponent {
@Input({required:true}) target: string = '';
@Input() label: string = '';
}
