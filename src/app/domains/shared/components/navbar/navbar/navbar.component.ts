import { Component, EventEmitter, Output } from '@angular/core';
import { NavlinkComponent } from '../navlink/navlink.component';
import { NavtogglerComponent } from '../navtoggler/navtoggler.component';
@Component({
  selector: 'app-navbar',
  imports: [NavlinkComponent, NavtogglerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navbarId: string = 'navbar-palin';

  @Output() clickEvent = new EventEmitter<string>();
  buttonHandler(id: string) {
    this.clickEvent.emit(id);
  }
}
