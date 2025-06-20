import { Component, computed, Input, input, signal, SimpleChanges } from '@angular/core';
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

  category = input.required<string>();

  categoryType = signal<Category>(Category.NOSTALGIC);
  categoryTitle =signal<string>("Nostálgicos");


   typeMap: Record<string, Category> = {
    strategy: Category.STRATEGY,
    rol:      Category.ROL,
    family:   Category.FAMILY,
    wargames: Category.WARGAME,
  };

  titleMap: Record<Category, string>={
    [Category.NOSTALGIC]: 'Nostálgicos',
    [Category.STRATEGY]: 'Estrategia',
    [Category.WARGAME]: 'Juegos de Guerra',
    [Category.FAMILY]: 'Familiares',
    [Category.ROL]: 'Rol'
  }

   derivedType = computed(() => {
    const categoryValue = this.category();
    return this.typeMap[categoryValue?.toLowerCase()] ?? Category.NOSTALGIC;
  });

  derivedTitle=computed(()=>{
    const categoryValue = this.categoryType();
    return this.titleMap[categoryValue]?? "Nostálgicos";
  });
  
  ngOnInit(): void {
    this.categoryType.set(this.derivedType());
    this.categoryTitle.set(this.derivedTitle());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && !changes['category'].isFirstChange()) {
      this.categoryType.set(this.derivedType());
      this.categoryTitle.set(this.derivedTitle());
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
