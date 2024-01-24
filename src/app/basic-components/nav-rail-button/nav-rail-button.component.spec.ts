import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRailButtonComponent } from './nav-rail-button.component';

describe('NavRailButtonComponent', () => {
  let component: NavRailButtonComponent;
  let fixture: ComponentFixture<NavRailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavRailButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavRailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
