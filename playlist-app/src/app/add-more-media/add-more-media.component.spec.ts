import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreMediaComponent } from './add-more-media.component';

describe('AddMoreMediaComponent', () => {
  let component: AddMoreMediaComponent;
  let fixture: ComponentFixture<AddMoreMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoreMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoreMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
