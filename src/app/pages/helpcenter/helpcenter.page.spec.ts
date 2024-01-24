import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcenterPage } from './helpcenter.page';

describe('HelpcenterPage', () => {
  let component: HelpcenterPage;
  let fixture: ComponentFixture<HelpcenterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpcenterPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpcenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
