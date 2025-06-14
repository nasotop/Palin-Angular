import { Component, input } from '@angular/core';
import { Game } from '../model/game.model';
import { ImageComponent } from '../../../../shared/components/image/image.component';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEsCL from '@angular/common/locales/es-CL';
registerLocaleData(localeEsCL, 'es-CL');
@Component({
  selector: 'app-game-card',
  imports: [CommonModule, ImageComponent],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
})
export class GameCardComponent {
  model = input.required<Game>();
  
}
