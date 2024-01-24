import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacesPage } from './spaces.page';

describe('SpacesPage', () => {
  let component: SpacesPage;
  let fixture: ComponentFixture<SpacesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacesPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
