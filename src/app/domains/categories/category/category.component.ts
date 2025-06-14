import { Component, input, signal } from '@angular/core';
import { GameWrapperComponent } from '../../shared/components/game/game-wrapper/game-wrapper.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { NuevoUsuarioComponent } from '../../shared/components/modal/nuevo-usuario/nuevo-usuario.component';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../../enum/category.enum';
@Component({
  selector: 'app-category',
  imports: [
    GameWrapperComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NgbModalModule,
  ],
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  constructor(private modalService: NgbModal) {}

  categoryType = signal<Category>(Category.NOSTALGIC);

  category = input.required<string>();

  ngOnInit() {
    switch (this.category()) {
      case 'strategy':
        this.categoryType.set(Category.STRATEGY);
        break;
      case 'rol':
        this.categoryType.set(Category.ROL);
        break;
      case 'family':
        this.categoryType.set(Category.FAMILY);
        break;
      case 'wargames':
        this.categoryType.set(Category.WARGAME);
        break;
      default:
        break;
    }
  }

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
