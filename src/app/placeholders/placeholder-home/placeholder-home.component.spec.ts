import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderHomeComponent } from './placeholder-home.component';

describe('PlaceholderHomeComponent', () => {
  let component: PlaceholderHomeComponent;
  let fixture: ComponentFixture<PlaceholderHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceholderHomeComponent]
    });
    fixture = TestBed.createComponent(PlaceholderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
