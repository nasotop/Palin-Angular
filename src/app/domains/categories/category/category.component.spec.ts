import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { Category } from '../../enum/category.enum';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    fixture.componentRef.setInput("category", "family");

    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.componentRef.setInput("category", "family");

    expect(component).toBeTruthy();
  });

  it("correct category input ", ()=>{
    fixture.componentRef.setInput("category", "rol");

    expect(Object.values(Category).includes(component.category() as Category)).toBeTruthy();

  });

  it("incorrect category input ", ()=>{
    fixture.componentRef.setInput("category", "dummy");

    expect(Object.values(Category).includes(component.category() as Category)).toBeFalsy();

  });
});
