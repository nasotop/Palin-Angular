import { Component } from '@angular/core';
import { ImageComponent} from "../image/image.component"
@Component({
  selector: 'app-header',
  imports: [ImageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
