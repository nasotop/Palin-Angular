import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtogglerComponent } from './navtoggler.component';

describe('NavtogglerComponent', () => {
  let component: NavtogglerComponent;
  let fixture: ComponentFixture<NavtogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavtogglerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavtogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
