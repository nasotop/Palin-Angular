import { Component, EventEmitter, Output } from '@angular/core';
import { NavitemComponent } from '../navitem/navitem.component';
import { NavdropdownComponent } from '../navdropdown/navdropdown.component';
import { NavbuttonComponent } from '../navbutton/navbutton.component';
import { DropdownItem } from '../model/dropdown-item.model';
@Component({
  selector: 'app-navlink',
  imports: [NavitemComponent, NavdropdownComponent, NavbuttonComponent],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.css',
})
export class NavlinkComponent {
  dropdownItems: DropdownItem[] = [
    { label: 'Estrategia', href: 'categories/strategy' },
    { label: 'Familiar', href: 'categories/family' },
    { label: 'Rol', href: 'categories/rol' },
    { label: 'Wargames', href: 'categories/wargames' },
  ];

  @Output() clickEvent = new EventEmitter<string>();
  buttonHandler(id: string) {
    this.clickEvent.emit(id);
  }
}
