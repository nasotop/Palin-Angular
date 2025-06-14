import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  imports: [],
  templateUrl: './navbutton.component.html',
  styleUrl: './navbutton.component.css',
})
export class NavbuttonComponent {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) id: string = '';

  @Output() clickEvent = new EventEmitter<string>();
  onClick(id: string) {
    this.clickEvent.emit(id);
  }

  
}
