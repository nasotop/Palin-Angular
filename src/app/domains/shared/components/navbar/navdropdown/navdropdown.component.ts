import { Component, input, Input, signal } from '@angular/core';
import { DropdownItem } from '../model/dropdown-item.model';

@Component({
  selector: 'app-navdropdown',
  imports: [],
  templateUrl: './navdropdown.component.html',
  styleUrl: './navdropdown.component.css'
})
export class NavdropdownComponent {
// @Input({required:true}) label: string = '';
// @Input({required:true}) options: DropdownItem[] = [];
label= input.required<string>();
options= input.required<DropdownItem[]>();



}
