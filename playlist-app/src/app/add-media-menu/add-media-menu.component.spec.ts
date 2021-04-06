import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediaMenuComponent } from './add-media-menu.component';

describe('AddMediaMenuComponent', () => {
  let component: AddMediaMenuComponent;
  let fixture: ComponentFixture<AddMediaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMediaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMediaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
