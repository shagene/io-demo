import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldersPage } from './holders.page';

describe('HoldersPage', () => {
  let component: HoldersPage;
  let fixture: ComponentFixture<HoldersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldersPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoldersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
