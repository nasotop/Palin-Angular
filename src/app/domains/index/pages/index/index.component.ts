import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar/navbar.component';
import { CategoryWrapperComponent } from '../../components/category/category-wrapper/category-wrapper.component';
import { GameWrapperComponent } from '../../../shared/components/game/game-wrapper/game-wrapper.component';
import { Category } from '../../../enum/category.enum';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NuevoUsuarioComponent } from '../../../shared/components/modal/nuevo-usuario/nuevo-usuario.component';
import{ FooterComponent} from '../../../shared/components/footer/footer.component'
import{ HeaderComponent} from '../../../shared/components/header/header.component'
import{ BannerComponent} from '../../../shared/components/banner/banner.component'
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    NavbarComponent,
    CategoryWrapperComponent,
    GameWrapperComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    NgbModalModule,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  constructor(private modalService: NgbModal) {}
  categories = [
    {
      href: 'categories/strategy',
      image:
        'https://kokua.es/wp-content/uploads/2021/05/Scythe-juego-de-mesa-de-estrategia.jpg',
      name: 'Estrategia',
    },
    {
      href: 'categories/family',
      image:
        'https://compartir.coop/sites/default/files/styles/wide/public/2025-01/juegos-de-mesa.webp?itok=_DynT3AH',
      name: 'Familiar',
    },
    {
      href: 'categories/rol',
      image:
        'https://assets.corvusbelli.net/corvusweb/img/blog/xl/2707-roleplaying/mesa.jpg',
      name: 'Rol',
    },
    {
      href: 'categories/wargames',
      image:
        'https://i0.wp.com/www.eljugadorperdido.com.ar/wp-content/uploads/2019/12/dized_board_game_companion_app_4.jpg?fit=960%2C615&ssl=1',
      name: 'WarGames',
    },
  ];
  CategoryType = Category;
 
  buttonHandler(id: string): void {
    if (id === 'BtnModalNuevoUsuario') {
      const modalRef = this.modalService.open(NuevoUsuarioComponent, {
        size: 'xl',
        
      });
      modalRef.componentInstance.title = 'Título dinámico Angular 19';
      modalRef.result
        .then((result) => console.log('Cerrado con:', result))
        .catch((reason) => console.log('Dismissed:', reason));
    }
  }
}
